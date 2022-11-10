proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;

## *** THE COIN LOGIC MARKETING TRACKER SECTION ***

server {
  server_name tclmt.io www.tclmt.io;

  location / {
    proxy_pass http://localhost:3100;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header  X-Real-IP $remote_addr;
    proxy_set_header  X-Forwarded-Proto https;
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_set_header  X-Forwarded-Host $remote_addr;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tclmt.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tclmt.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
  server_name website.tclmt.io www.website.tclmt.io;

  location / {
    proxy_pass http://localhost:3100/track/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host website.tclmt.io;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header  X-Real-IP $remote_addr;
    proxy_set_header  X-Forwarded-Proto https;
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_set_header  X-Forwarded-Host $remote_addr;
    proxy_set_header  Subdomain website;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tclmt.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tclmt.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
  server_name whitepaper.tclmt.io www.whitepaper.tclmt.io;

  location / {
    proxy_pass http://localhost:3100;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host whitepaper.tclmt.io;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header  X-Real-IP $remote_addr;
    proxy_set_header  X-Forwarded-Proto https;
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_set_header  X-Forwarded-Host $remote_addr;    

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tclmt.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tclmt.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
  server_name twitter.tclmt.io www.twitter.tclmt.io;

  location / {
    proxy_pass http://localhost:3100;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host twitter.tclmt.io;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header  X-Real-IP $remote_addr;
    proxy_set_header  X-Forwarded-Proto https;
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_set_header  X-Forwarded-Host $remote_addr;    

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tclmt.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tclmt.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
  server_name telegram.tclmt.io www.telegram.tclmt.io;

  location / {
    proxy_pass http://localhost:3100;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host telegram.tclmt.io;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header  X-Real-IP $remote_addr;
    proxy_set_header  X-Forwarded-Proto https;
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_set_header  X-Forwarded-Host $remote_addr;    

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tclmt.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tclmt.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
  server_name discord.tclmt.io www.discord.tclmt.io;

  location / {
    proxy_pass http://localhost:3100;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host discord.tclmt.io;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header  X-Real-IP $remote_addr;
    proxy_set_header  X-Forwarded-Proto https;
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_set_header  X-Forwarded-Host $remote_addr;    

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tclmt.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tclmt.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
  server_name reddit.tclmt.io www.reddit.tclmt.io;

  location / {
    proxy_pass http://localhost:3100;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host reddit.tclmt.io;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header  X-Real-IP $remote_addr;
    proxy_set_header  X-Forwarded-Proto https;
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_set_header  X-Forwarded-Host $remote_addr;    

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tclmt.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tclmt.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
  server_name youtube.tclmt.io www.youtube.tclmt.io;

  location / {
    proxy_pass http://localhost:3100;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host youtube.tclmt.io;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header  X-Real-IP $remote_addr;
    proxy_set_header  X-Forwarded-Proto https;
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_set_header  X-Forwarded-Host $remote_addr;    

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tclmt.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tclmt.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
  server_name medium.tclmt.io www.medium.tclmt.io;

  location / {
    proxy_pass http://localhost:3100;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host medium.tclmt.io;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header  X-Real-IP $remote_addr;
    proxy_set_header  X-Forwarded-Proto https;
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_set_header  X-Forwarded-Host $remote_addr;    

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tclmt.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tclmt.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

server {
  server_name exchange.tclmt.io www.exchange.tclmt.io;

  location / {
    proxy_pass http://localhost:3100;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host exchange.tclmt.io;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header  X-Real-IP $remote_addr;
    proxy_set_header  X-Forwarded-Proto https;
    proxy_set_header  X-Forwarded-For $remote_addr;
    proxy_set_header  X-Forwarded-Host $remote_addr;    

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-XSS-Protection          "1; mode=block" always;
    add_header X-Frame-Options DENY always;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tclmt.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/tclmt.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

## *** THE COIN LOGIC MARKETING TRACKER SECTION END ***

server {
    if ($host = www.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name tclmt.io www.tclmt.io;

    listen 80;
    return 404; # managed by Certbot




}

server {
    if ($host = www.website.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = website.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name website.tclmt.io www.website.tclmt.io;

    listen 80;
    return 404; # managed by Certbot




}


server {
    if ($host = www.whitepaper.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = whitepaper.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name whitepaper.tclmt.io www.whitepaper.tclmt.io;

  listen 80;
    return 404; # managed by Certbot




}

server {
    if ($host = www.twitter.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = twitter.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name twitter.tclmt.io www.twitter.tclmt.io;

  listen 80;
    return 404; # managed by Certbot




}

server {
    if ($host = www.telegram.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = telegram.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name telegram.tclmt.io www.telegram.tclmt.io;

  listen 80;
    return 404; # managed by Certbot




}

server {
    if ($host = www.discord.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = discord.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name discord.tclmt.io www.discord.tclmt.io;

  listen 80;
    return 404; # managed by Certbot




}

server {
    if ($host = www.reddit.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = reddit.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name reddit.tclmt.io www.reddit.tclmt.io;

  listen 80;
    return 404; # managed by Certbot




}

server {
    if ($host = www.youtube.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = youtube.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name youtube.tclmt.io www.youtube.tclmt.io;

  listen 80;
    return 404; # managed by Certbot




}

server {
    if ($host = www.medium.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = medium.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name medium.tclmt.io www.medium.tclmt.io;

  listen 80;
    return 404; # managed by Certbot




}

server {
    if ($host = www.exchange.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = exchange.tclmt.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  server_name exchange.tclmt.io www.exchange.tclmt.io;

  listen 80;
    return 404; # managed by Certbot




}