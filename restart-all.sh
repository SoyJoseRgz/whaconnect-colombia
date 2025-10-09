#!/bin/bash
cd /home/whaconnect/whaconnect/backend
pm2 restart whaconnect-backend
cd /home/whaconnect/whaconnect/frontend
pm2 restart whaconnect-frontend
