
import Script from 'next/script';

export default function BioaquaRiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="tiktok-pixel-bioaqua" strategy="afterInteractive">
        {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t.async=!0,t.src=e;var n=d.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)};for(var i=0;i<ttq.methods.length;i++)ttq[ttq.methods[i]]=function(t){return function(){t.push([ttq.methods[i]].concat(Array.from(arguments)))}}(ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

            ttq.load('D6LRTVBC77U3SAC8ABO0');
            ttq.page();
          }(window, document, 'ttq');
        `}
      </Script>
      {children}
    </>
  );
}
