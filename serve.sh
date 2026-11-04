#!/usr/bin/env bash
# Serves the app on your local network so you can open it on a phone/tablet on the same Wi-Fi.
cd "$(dirname "$0")"
PORT="${1:-8000}"
IP=$(hostname -I 2>/dev/null | awk '{print $1}')
echo "Computer:      http://localhost:$PORT"
[ -n "$IP" ] && echo "Phone/tablet:  http://$IP:$PORT   (same Wi-Fi)"
exec python3 -m http.server "$PORT" --bind 0.0.0.0
