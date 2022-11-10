proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;

server {
  server_name thecoinlogic.com www.thecoinlogic.com;

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

  location /discord {
    proxy_pass http://localhost:2422
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl http2; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/thecoinlogic.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/thecoinlogic.com/privkey.pem; # managed by Certbot

    # include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;

    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
  server_name cms.thecoinlogic.com www.cms.thecoinlogic.com;

  location /_next/static {
    proxy_cache STATIC;
    proxy_pass http://localhost:3500;
  }

  location /static {
    proxy_cache STATIC;
    proxy_pass http://localhost:3500;
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

    listen 443 ssl http2; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/thecoinlogic.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/thecoinlogic.com/privkey.pem; # managed by Certbot

    #include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;

    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = www.thecoinlogic.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = thecoinlogic.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name thecoinlogic.com www.thecoinlogic.com;

  listen 80;
    return 404; # managed by Certbot
}

server {
    if ($host = www.cms.thecoinlogic.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = cms.thecoinlogic.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name cms.thecoinlogic.com www.cms.thecoinlogic.com;

  listen 80;
    return 404; # managed by Certbot
}