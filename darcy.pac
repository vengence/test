function FindProxyForURL(url, host) {
if (shExpMatch(url,"*.topchitu.com/*")) {
return "PROXY 192.168.100.10:80";
}