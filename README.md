# Krejčovství VÍLEÁ Atelier — Web

Statický web pro krejčovský ateliér **Víleá Atelier**, Praha 4 — Nusle.

## 📋 Struktura

- `index.html` — domů
- `o-nas.html` — o nás
- `sluzby.html` — služby
- `cenik.html` — ceník
- `galerie.html` — galerie (placeholder)
- `kontakt.html` — kontakt + Google Maps
- `assets/` — CSS, JS, obrázky, video, OG banner
- `sitemap.xml` — sitemap
- `robots.txt` — robots
- `vercel.json` — Vercel konfigurace

## 🚀 Deploy na Vercel (5 minut)

### 1. Vytvoř GitHub repo

```bash
# v novém prázdném adresáři
git init
git add .
git commit -m "Initial commit: Víleá Atelier web"
git branch -M main
git remote add origin https://github.com/<TVŮJ-USERNAME>/<NAZEV-REPO>.git
git push -u origin main
```

### 2. Připoj k Vercelu

1. Jdi na https://vercel.com/dashboard
2. **Add New…** → **Project**
3. **Import Git Repository** → vyber svůj repo
4. Vercel autodetekuje: Framework Preset = **Other**, Build Command prázdné, Output Directory = `.`
5. Klikni **Deploy**

### 3. Přidej custom doménu

1. V projektu na Vercel → **Settings** → **Domains**
2. Napiš svůj domén (např. `vileaatelier.cz`)
3. Vercel ti ukáže DNS záznamy, které musíš přidat u registrátora domény (Wedos, Forpsi, GoDaddy…):
   - **A záznam**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
4. Počkej na DNS propagaci (5–60 minut)
5. Vercel automaticky vydá **Let's Encrypt** SSL certifikát ✅

### 4. Aktualizuj SEO kontakt

- Google Search Console → https://search.google.com/search-console/
- Přidej doménu a ověř přes DNS TXT záznam
- Odešli sitemap: `https://vileaatelier.cz/sitemap.xml`

## 🔧 Úprava domény

Pokud tvůj doména je jiná než `vileaatelier.cz`, find-and-replace ve všech HTML:

```bash
# na macOS/Linux
sed -i '' 's/vileaatelier.cz/tvuj-domen.cz/g' *.html

# nebo ručně: otevři každý .html a nahraď vileaatelier.cz
```

Aktualizuj tyto soubory:
- `sitemap.xml`
- `robots.txt` (Sitemap URL)

## 📞 Kontakt v kódu

Aktuální kontakt (v `kontakt.html`, `o-nas.html`, `index.html` JSON-LD):

- **Adresa**: Nuselská 1497/70, 140 00 Praha 4 — Nusle
- **Telefon**: +420 799 558 597
- **WhatsApp**: +420 799 558 597
- **E-mail**: vilea.atelier@gmail.com
- **Instagram**: https://www.instagram.com/vilea.atelier
- **Facebook**: https://www.facebook.com/share/19ng7usNfz/
- **Mapa**: Google Maps embed

## 🎨 Design

- **Barvy**: růžová (`#F5DCD2`) + zlatá (`#C9A363`) + švestková (`#6B3838`)
- **Fonty**: Cormorant Garamond (serif) + Outfit (sans)
- **Responzivní**: mobile-first, breakpoint 720px

## 📄 Licence

Všechna práva vyhrazena © 2025 Víleá Atelier
