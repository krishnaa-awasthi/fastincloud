import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

const GA_ID = "G-XXXXXXX";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (!document.cookie.includes("cookie_consent=accepted")) {
      setOpen(true);
    } else {
      loadGA();
    }
  }, []);

  if (!mounted) return null;

  const acceptCookies = () => {
    document.cookie =
      "cookie_consent=accepted; path=/; max-age=31536000; SameSite=Lax";
    setOpen(false);
    loadGA();
  };

  return createPortal(
    <div
      className={`fixed bottom-0 left-0 w-full z-[1000] transition-transform duration-500 ease-out
      ${open ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="rounded-2xl border border-border bg-background/80 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6">
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold text-foreground">
                We value your privacy
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                We use cookies to analyze traffic and improve your experience.
                Analytics cookies load only after your consent.
              </p>
            </div>

            <div className="flex gap-3 shrink-0">
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="bg-background/70"
              >
                Dismiss
              </Button>
              <Button
                onClick={acceptCookies}
                className="bg-gradient-to-r from-primary to-chart-2 text-white hover:opacity-90"
              >
                Accept Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ---------------- GA ---------------- */

function loadGA() {
  if (window.gtag) return;

  const s1 = document.createElement("script");
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s1.async = true;

  const s2 = document.createElement("script");
  s2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_ID}', { anonymize_ip: true });
  `;

  document.head.appendChild(s1);
  document.head.appendChild(s2);

  setTimeout(sendConsentMeta, 1500);
}

function sendConsentMeta() {
  if (!window.gtag) return;

  window.gtag("get", GA_ID, "client_id", (clientId: string) => {
    fetch("/api/analytics/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientId,
        userAgent: navigator.userAgent,
        language: navigator.language,
      }),
    });
  });
}
