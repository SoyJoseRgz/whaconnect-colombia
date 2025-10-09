#!/bin/bash
echo "Iniciando modo desenvolvimento..."
echo "Backend: http://localhost:8080"
echo "Frontend: http://localhost:3000"
echo ""
echo "Para parar os serviços, execute: ./stop-all.sh"
echo ""

# Iniciar backend
cd /home/whaconnect/whaconnect/backend
pm2 start npm --name "whaconnect-backend-dev" -- run "dev:server"

# Iniciar frontend
cd /home/whaconnect/whaconnect/frontend
pm2 start npm --name "whaconnect-frontend-dev" -- start

echo "Serviços iniciados! Use 'pm2 logs' para ver os logs."
