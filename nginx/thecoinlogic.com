proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;

server {
  server_name thecoinlogic.com www.thecoinlogic.com;

  listen 80;

  location /_next/static {
    proxy_cache STATIC;
    proxy_pass http://localhost:3000;
  }

  location /static {
    proxy_cache STATIC;
    proxy_pass http://localhost:3000;
  }

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }
}

server {
  server_name cms.thecoinlogic.com www.cms.thecoinlogic.com;

  listen 80;

  location /_next/static {
    proxy_cache STATIC;
    proxy_pass http://localhost:3000;
  }

  location /static {
    proxy_cache STATIC;
    proxy_pass http://localhost:3000;
  }

  location / {
    proxy_pass http://localhost:3500;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }
}