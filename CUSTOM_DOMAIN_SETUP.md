# Custom Domain Setup for Netlify

Your current Netlify URL: `https://beautiful-brigadeiros-48ff50.netlify.app`

## Step 1: Add Custom Domain in Netlify

1. **Go to your Netlify dashboard**: https://app.netlify.com
2. **Select your site**: `beautiful-brigadeiros-48ff50` (or your site name)
3. **Go to**: Site settings → Domain management
4. **Click**: "Add custom domain"
5. **Enter your domain**: 
   - Example: `inlineart.com` or `www.inlineart.com`
   - Or: `inlineart.in` or `www.inlineart.in`
6. **Click**: "Verify" or "Add domain"

## Step 2: Configure DNS Records

After adding your domain, Netlify will show you DNS records to configure:

### Option A: If you purchased a domain from a registrar (GoDaddy, Namecheap, etc.)

**Configure these DNS records:**

1. **For Root Domain (inlineart.com)**:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   TTL: 3600
   ```

2. **For WWW (www.inlineart.com)**:
   ```
   Type: CNAME
   Name: www
   Value: beautiful-brigadeiros-48ff50.netlify.app
   TTL: 3600
   ```

3. **Alternative (easier)**: Use Netlify Nameservers:
   - Go to your domain registrar
   - Update nameservers to:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```

### Option B: If you don't have a domain yet

**Free Domain Options:**

1. **Freenom** (Free domains like `.tk`, `.ml`, `.ga`, `.cf`):
   - Go to: https://www.freenom.com
   - Search for a free domain (e.g., `inlineart.tk`)
   - Register (free)
   - Follow DNS configuration above

2. **GitHub Student Pack** (If you're a student):
   - Includes free `.me` domain from Namecheap

3. **Paid Options** (Recommended for professional):
   - **Namecheap**: ~$10-15/year for `.com`
   - **Google Domains**: ~$12/year for `.com`
   - **GoDaddy**: ~$12-15/year for `.com`

## Step 3: SSL Certificate (Automatic)

- Netlify provides **FREE SSL/HTTPS** automatically
- Once DNS is configured, Netlify will issue the certificate
- Takes 1-24 hours to activate
- You'll see a green lock 🔒 in your browser

## Step 4: Verify Setup

1. **Wait 5-30 minutes** for DNS to propagate
2. **Check**: Netlify dashboard → Domain management
3. **Status should show**: "SSL certificate ready"
4. **Visit**: Your custom domain (e.g., `https://inlineart.com`)

## Popular Domain Registrars

### For India (.in domains):
- **GoDaddy India**: https://in.godaddy.com
- **Hostinger India**: https://www.hostinger.in
- **BigRock**: https://www.bigrock.in

### International:
- **Namecheap**: https://www.namecheap.com (Recommended)
- **Google Domains**: https://domains.google
- **Cloudflare**: https://www.cloudflare.com/products/registrar

## Quick Steps Summary:

1. ✅ Buy/Register a domain (or use free domain)
2. ✅ Add domain in Netlify dashboard
3. ✅ Update DNS records at your registrar
4. ✅ Wait for SSL certificate (automatic)
5. ✅ Your site will be live on custom domain!

## Need Help?

**If you need help with:**
- Which domain to choose: Consider `.com` or `.in` (for India)
- DNS configuration: Share your registrar name, I can guide you
- Netlify setup: Check Netlify dashboard for specific instructions

**Recommended domain name examples:**
- `inlineart.in` (India-specific)
- `inlineart.com` (International)
- `getinlineart.com`
- `inlineartdesigns.in`

