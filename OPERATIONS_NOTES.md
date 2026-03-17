production downtime alert fires

ssh leon@165.22.53.96
sudo systemctl status nginx
sudo nginx -t
sudo tail -n 50 /var/log/nginx/error.log
curl -I https://dignifyxapp.xyz

staging downtime alert fires

ssh leon@165.22.53.96
sudo systemctl status nginx
curl -I https://staging.dignifyxapp.xyz

SSL expiry alert fires

sudo certbot certificates
sudo systemctl status certbot.timer

Which version is live

sudo cat /var/www/html/.deploy-version
sudo cat /var/www/staging/.deploy-version
