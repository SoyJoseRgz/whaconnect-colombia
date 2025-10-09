#!/bin/bash

GREEN='\033[1;32m'
BLUE='\033[1;34m'
WHITE='\033[1;37m'
RED='\033[1;31m'
YELLOW='\033[1;33m'

# Variables Locales
PROJETO_DIR="/home/whaconnect/whaconnect"
BACKEND_PORT=8080
FRONTEND_PORT=3000
DB_NAME="whaconnect_local"
DB_USER="whaconnect"
DB_PASS="local123"
REDIS_PASS="local123"
MASTER_KEY="master123"
EMAIL_LOCAL="admin@local.dev"
NOME_TITULO="WhaConnect Local"
NUMERO_SUPORTE="+55119999999"

# Verificar se é executado como root
if [ "$EUID" -ne 0 ]; then
  echo
  printf "${WHITE} >> Este script precisa ser executado como root ${RED}ou com privilégios de superusuário${WHITE}.\n"
  echo
  sleep 2
  exit 1
fi

# Função para manipular erros
trata_erro() {
  printf "${RED}Erro encontrado na etapa $1. Encerrando o script.${WHITE}\n"
  exit 1
}

# Banner
banner() {
  clear
  printf "${BLUE}"
  echo "╔══════════════════════════════════════════════════════════════╗"
  echo "║                  INSTALADOR LOCAL WHACONNECT                 ║"
  echo "║                                                              ║"
  echo "║                    Desenvolvimento Local                     ║"
  echo "╚══════════════════════════════════════════════════════════════╝"
  printf "${WHITE}"
  echo
}

# Verificar se o diretório do projeto existe
verificar_projeto() {
  banner
  printf "${WHITE} >> Verificando diretório do projeto...\n"
  echo
  if [ ! -d "$PROJETO_DIR" ]; then
    printf "${RED} >> Diretório do projeto não encontrado: $PROJETO_DIR${WHITE}\n"
    printf "${WHITE} >> Verificando diretórios disponíveis...${WHITE}\n"
    ls -la /home/whaconnect/
    exit 1
  fi
  
  if [ ! -d "$PROJETO_DIR/backend" ] || [ ! -d "$PROJETO_DIR/frontend" ]; then
    printf "${RED} >> Pastas backend ou frontend não encontradas em: $PROJETO_DIR${WHITE}\n"
    exit 1
  fi
  
  printf "${GREEN} >> Projeto encontrado em: $PROJETO_DIR${WHITE}\n"
  sleep 2
}

# Atualizar sistema
atualizar_sistema() {
  banner
  printf "${WHITE} >> Atualizando sistema...\n"
  echo
  {
    apt update -y && apt upgrade -y
    apt install -y build-essential curl wget git lsof
    sleep 2
  } || trata_erro "atualizar_sistema"
}

# Instalar Node.js
instalar_node() {
  banner
  printf "${WHITE} >> Instalando Node.js 20...\n"
  echo
  {
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
    node --version
    npm --version
    sleep 2
  } || trata_erro "instalar_node"
}

# Instalar PostgreSQL
instalar_postgres() {
  banner
  printf "${WHITE} >> Instalando PostgreSQL...\n"
  echo
  {
    apt-get install gnupg -y
    sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
    apt-get update -y && apt-get -y install postgresql-15
    systemctl enable postgresql
    systemctl start postgresql
    sleep 2
  } || trata_erro "instalar_postgres"
}

# Instalar Redis
instalar_redis() {
  banner
  printf "${WHITE} >> Instalando Redis...\n"
  echo
  {
    apt install redis-server -y
    systemctl enable redis-server
    sed -i "s/# requirepass foobared/requirepass ${REDIS_PASS}/g" /etc/redis/redis.conf
    sed -i 's/^appendonly no/appendonly yes/g' /etc/redis/redis.conf
    systemctl restart redis-server
    sleep 2
  } || trata_erro "instalar_redis"
}

# Instalar PM2
instalar_pm2() {
  banner
  printf "${WHITE} >> Instalando PM2...\n"
  echo
  {
    npm install -g pm2
    sleep 2
  } || trata_erro "instalar_pm2"
}

# Instalar dependências do sistema
instalar_dependencias() {
  banner
  printf "${WHITE} >> Instalando dependências do sistema...\n"
  echo
  {
    apt-get install -y libaom-dev libass-dev libfreetype6-dev libfribidi-dev \
                       libharfbuzz-dev libgme-dev libgsm1-dev libmp3lame-dev \
                       libopencore-amrnb-dev libopencore-amrwb-dev libopenmpt-dev \
                       libopus-dev libfdk-aac-dev librubberband-dev libspeex-dev \
                       libssh-dev libtheora-dev libvidstab-dev libvo-amrwbenc-dev \
                       libvorbis-dev libvpx-dev libwebp-dev libx264-dev libx265-dev \
                       libxvidcore-dev libzmq3-dev libsdl2-dev yasm cmake libtool \
                       libc6 libc6-dev unzip pkg-config texinfo zlib1g-dev \
                       libxshmfence-dev libgcc1 libgbm-dev fontconfig locales \
                       gconf-service libasound2 libatk1.0-0 libcairo2 libcups2 \
                       libdbus-1-3 libexpat1 libfontconfig1 libgcc-s1 libgconf-2-4 \
                       libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
                       libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 \
                       libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 \
                       libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 \
                       libxtst6 ca-certificates fonts-liberation libappindicator1 \
                       libnss3 lsb-release xdg-utils ffmpeg
    sleep 2
  } || trata_erro "instalar_dependencias"
}

# Criar banco de dados
criar_banco() {
  banner
  printf "${WHITE} >> Criando banco de dados...\n"
  echo
  {
    sudo -u postgres psql <<EOF
CREATE USER ${DB_USER} SUPERUSER INHERIT CREATEDB CREATEROLE;
ALTER USER ${DB_USER} PASSWORD '${DB_PASS}';
CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};
\q
EOF
    printf "${GREEN} >> Banco de dados '${DB_NAME}' criado com sucesso!${WHITE}\n"
    sleep 2
  } || trata_erro "criar_banco"
}

# Configurar backend
configurar_backend() {
  banner
  printf "${WHITE} >> Configurando backend...\n"
  echo
  {
    cd ${PROJETO_DIR}/backend
    
    # Criar arquivo .env local
    cat > .env <<EOF
# Configuração Local - WhaConnect
NODE_ENV=development
BACKEND_URL=http://localhost:${BACKEND_PORT}
FRONTEND_URL=http://localhost:${FRONTEND_PORT}
PROXY_PORT=80
PORT=${BACKEND_PORT}

# CREDENCIAIS BD
DB_HOST=localhost
DB_DIALECT=postgres
DB_PORT=5432
DB_USER=${DB_USER}
DB_PASS=${DB_PASS}
DB_NAME=${DB_NAME}

# DADOS REDIS
REDIS_URI=redis://:${REDIS_PASS}@127.0.0.1:6379
REDIS_OPT_LIMITER_MAX=1
REDIS_OPT_LIMITER_DURATION=3000

TIMEOUT_TO_IMPORT_MESSAGE=1000

# SECRETS
JWT_SECRET=$(openssl rand -base64 32)
JWT_REFRESH_SECRET=$(openssl rand -base64 32)
MASTER_KEY=${MASTER_KEY}

VERIFY_TOKEN=whaticket
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=

# EMAIL (opcional para desenvolvimento)
MAIL_HOST="smtp.gmail.com"
MAIL_USER=""
MAIL_PASS=""
MAIL_FROM="Local Dev <dev@local.dev>"
MAIL_PORT="465"

# WhatsApp Oficial (desabilitado para local)
USE_WHATSAPP_OFICIAL=false
TOKEN_API_OFICIAL="adminpro"

# API de Transcrição de Audio (desabilitado para local)
TRANSCRIBE_URL=http://localhost:4002
EOF

    printf "${GREEN} >> Arquivo .env do backend configurado!${WHITE}\n"
    sleep 2
  } || trata_erro "configurar_backend"
}

# Instalar backend
instalar_backend() {
  banner
  printf "${WHITE} >> Instalando dependências do backend...\n"
  echo
  {
    cd ${PROJETO_DIR}/backend
    
    # Instalar dependências
    export PUPPETEER_SKIP_DOWNLOAD=true
    rm -rf node_modules package-lock.json
    npm install --force
    npm install puppeteer-core --force
    npm install glob --force
    
    # Build do projeto
    npm run build
    
    # Executar migrações
    npx sequelize db:migrate
    
    # Executar seeds
    npx sequelize db:seed:all
    
    printf "${GREEN} >> Backend instalado e configurado!${WHITE}\n"
    sleep 2
  } || trata_erro "instalar_backend"
}

# Configurar frontend
configurar_frontend() {
  banner
  printf "${WHITE} >> Configurando frontend...\n"
  echo
  {
    cd ${PROJETO_DIR}/frontend
    
    # Criar arquivo .env local
    cat > .env <<EOF
REACT_APP_BACKEND_URL=http://localhost:${BACKEND_PORT}
REACT_APP_FACEBOOK_APP_ID=
REACT_APP_REQUIRE_BUSINESS_MANAGEMENT=TRUE
REACT_APP_NAME_SYSTEM=${NOME_TITULO}
REACT_APP_NUMBER_SUPPORT=${NUMERO_SUPORTE}
SERVER_PORT=${FRONTEND_PORT}

GENERATE_SOURCEMAP=false
INLINE_RUNTIME_CHUNK=false
BUILD_PATH=build
CI=false

# Desabilitar análises desnecessárias em desenvolvimento
ESLint_NO_DEV_ERRORS=true
TSC_COMPILE_ON_ERROR=true
FAST_REFRESH=true
EOF

    printf "${GREEN} >> Arquivo .env do frontend configurado!${WHITE}\n"
    sleep 2
  } || trata_erro "configurar_frontend"
}

# Instalar frontend
instalar_frontend() {
  banner
  printf "${WHITE} >> Instalando dependências do frontend...\n"
  echo
  {
    cd ${PROJETO_DIR}/frontend
    
    # Instalar dependências
    npm install --force
    npx browserslist@latest --update-db
    
    # Configurar porta no server.js
    sed -i "s/3000/${FRONTEND_PORT}/g" server.js
    
    # Build do projeto
    NODE_OPTIONS="--max-old-space-size=4096 --openssl-legacy-provider" npm run build
    
    printf "${GREEN} >> Frontend instalado e configurado!${WHITE}\n"
    sleep 2
  } || trata_erro "instalar_frontend"
}

# Criar scripts de inicialização
criar_scripts() {
  banner
  printf "${WHITE} >> Criando scripts de inicialização...\n"
  echo
  {
    # Script para iniciar backend
    cat > ${PROJETO_DIR}/start-backend.sh <<EOF
#!/bin/bash
cd ${PROJETO_DIR}/backend
pm2 start dist/server.js --name whaconnect-backend
pm2 logs whaconnect-backend
EOF

    # Script para iniciar frontend
    cat > ${PROJETO_DIR}/start-frontend.sh <<EOF
#!/bin/bash
cd ${PROJETO_DIR}/frontend
pm2 start server.js --name whaconnect-frontend
pm2 logs whaconnect-frontend
EOF

    # Script para parar todos os serviços
    cat > ${PROJETO_DIR}/stop-all.sh <<EOF
#!/bin/bash
pm2 stop all
pm2 delete all
EOF

    # Script para reiniciar todos os serviços
    cat > ${PROJETO_DIR}/restart-all.sh <<EOF
#!/bin/bash
cd ${PROJETO_DIR}/backend
pm2 restart whaconnect-backend
cd ${PROJETO_DIR}/frontend
pm2 restart whaconnect-frontend
EOF

    # Script para desenvolvimento (modo watch)
    cat > ${PROJETO_DIR}/dev-mode.sh <<EOF
#!/bin/bash
echo "Iniciando modo desenvolvimento..."
echo "Backend: http://localhost:${BACKEND_PORT}"
echo "Frontend: http://localhost:${FRONTEND_PORT}"
echo ""
echo "Para parar os serviços, execute: ./stop-all.sh"
echo ""

# Iniciar backend
cd ${PROJETO_DIR}/backend
pm2 start npm --name "whaconnect-backend-dev" -- run "dev:server"

# Iniciar frontend
cd ${PROJETO_DIR}/frontend
pm2 start npm --name "whaconnect-frontend-dev" -- start

echo "Serviços iniciados! Use 'pm2 logs' para ver os logs."
EOF

    # Dar permissões de execução
    chmod +x ${PROJETO_DIR}/*.sh
    
    printf "${GREEN} >> Scripts criados em ${PROJETO_DIR}!${WHITE}\n"
    sleep 2
  } || trata_erro "criar_scripts"
}

# Iniciar serviços
iniciar_servicos() {
  banner
  printf "${WHITE} >> Iniciando serviços...\n"
  echo
  {
    cd ${PROJETO_DIR}/backend
    pm2 start dist/server.js --name whaconnect-backend
    
    cd ${PROJETO_DIR}/frontend
    pm2 start server.js --name whaconnect-frontend
    
    pm2 save
    
    printf "${GREEN} >> Serviços iniciados com PM2!${WHITE}\n"
    sleep 2
  } || trata_erro "iniciar_servicos"
}

# Mostrar informações finais
mostrar_info_final() {
  banner
  printf "${GREEN} >> Instalação concluída com sucesso!${WHITE}\n"
  echo
  printf "${WHITE}╔══════════════════════════════════════════════╗${WHITE}\n"
  printf "${WHITE}║                 INFORMAÇÕES                  ║${WHITE}\n"
  printf "${WHITE}╠══════════════════════════════════════════════╣${WHITE}\n"
  printf "${WHITE}║ Backend:  ${BLUE}http://localhost:${BACKEND_PORT}${WHITE}                    ║${WHITE}\n"
  printf "${WHITE}║ Frontend: ${BLUE}http://localhost:${FRONTEND_PORT}${WHITE}                     ║${WHITE}\n"
  printf "${WHITE}║                                              ║${WHITE}\n"
  printf "${WHITE}║ Usuário:  ${YELLOW}admin@multi100.com.br${WHITE}              ║${WHITE}\n"
  printf "${WHITE}║ Senha:    ${YELLOW}adminpro${WHITE}                         ║${WHITE}\n"
  printf "${WHITE}║                                              ║${WHITE}\n"
  printf "${WHITE}║ Banco:    ${YELLOW}${DB_NAME}${WHITE}                   ║${WHITE}\n"
  printf "${WHITE}║ DB User:  ${YELLOW}${DB_USER}${WHITE}                        ║${WHITE}\n"
  printf "${WHITE}║ DB Pass:  ${YELLOW}${DB_PASS}${WHITE}                       ║${WHITE}\n"
  printf "${WHITE}╚══════════════════════════════════════════════╝${WHITE}\n"
  echo
  printf "${WHITE}Scripts disponíveis em ${BLUE}${PROJETO_DIR}${WHITE}:\n"
  printf "${WHITE} • ${GREEN}./start-backend.sh${WHITE}    - Iniciar apenas backend\n"
  printf "${WHITE} • ${GREEN}./start-frontend.sh${WHITE}   - Iniciar apenas frontend\n"
  printf "${WHITE} • ${GREEN}./dev-mode.sh${WHITE}         - Modo desenvolvimento (watch)\n"
  printf "${WHITE} • ${GREEN}./restart-all.sh${WHITE}      - Reiniciar todos os serviços\n"
  printf "${WHITE} • ${GREEN}./stop-all.sh${WHITE}         - Parar todos os serviços\n"
  echo
  printf "${WHITE}Comandos PM2 úteis:\n"
  printf "${WHITE} • ${BLUE}pm2 list${WHITE}              - Listar serviços\n"
  printf "${WHITE} • ${BLUE}pm2 logs${WHITE}              - Ver logs de todos\n"
  printf "${WHITE} • ${BLUE}pm2 logs whaconnect-backend${WHITE} - Logs do backend\n"
  printf "${WHITE} • ${BLUE}pm2 logs whaconnect-frontend${WHITE} - Logs do frontend\n"
  echo
}

# Menu principal
menu() {
  while true; do
    banner
    printf "${WHITE} Selecione uma opção: \n"
    echo
    printf "   [${BLUE}1${WHITE}] Instalação Completa\n"
    printf "   [${BLUE}2${WHITE}] Só Dependências do Sistema\n"
    printf "   [${BLUE}3${WHITE}] Só Configurar Projeto\n"
    printf "   [${BLUE}4${WHITE}] Iniciar Serviços\n"
    printf "   [${BLUE}5${WHITE}] Parar Serviços\n"
    printf "   [${BLUE}0${WHITE}] Sair\n"
    echo
    read -p "> " option
    case "${option}" in
    1)
      instalacao_completa
      ;;
    2)
      instalar_dependencias_sistema
      ;;
    3)
      configurar_projeto
      ;;
    4)
      iniciar_servicos
      ;;
    5)
      pm2 stop all
      printf "${GREEN} >> Serviços parados!${WHITE}\n"
      sleep 2
      ;;
    0)
      exit 0
      ;;
    *)
      printf "${RED}Opção inválida. Tente novamente.${WHITE}\n"
      sleep 2
      ;;
    esac
  done
}

# Instalação completa
instalacao_completa() {
  verificar_projeto
  atualizar_sistema
  instalar_node
  instalar_postgres
  instalar_redis
  instalar_pm2
  instalar_dependencias
  criar_banco
  configurar_backend
  instalar_backend
  configurar_frontend
  instalar_frontend
  criar_scripts
  iniciar_servicos
  mostrar_info_final
}

# Instalar só dependências do sistema
instalar_dependencias_sistema() {
  verificar_projeto
  atualizar_sistema
  instalar_node
  instalar_postgres
  instalar_redis
  instalar_pm2
  instalar_dependencias
  criar_banco
  printf "${GREEN} >> Dependências do sistema instaladas!${WHITE}\n"
  sleep 3
}

# Configurar só o projeto
configurar_projeto() {
  verificar_projeto
  configurar_backend
  instalar_backend
  configurar_frontend
  instalar_frontend
  criar_scripts
  printf "${GREEN} >> Projeto configurado!${WHITE}\n"
  sleep 3
}

# Verificar se é primeira execução
if [ "$1" = "--menu" ]; then
  menu
else
  instalacao_completa
fi