server {
  server_name thecoinlogic.com www.thecoinlogic.com;

  listen 80;

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