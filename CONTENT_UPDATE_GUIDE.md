# Content Update Guide - Vasundhra Motors Website

## 📝 Easy Guide to Update Website Content

This guide helps you update text, images, contact information, and other content on your Vasundhra Motors website **without any coding knowledge**.

---

## 🔧 What You Can Update

1. **Contact Information** (phone, email, address)
2. **Business Hours**
3. **Service Descriptions**
4. **About Us Text**
5. **Slider Images and Text**
6. **Google Maps Location**
7. **Social Media Links**
8. **Prices (if you add pricing)**

---

## 📞 1. Update Contact Information

### Phone Numbers

**Where to find:** Search for `tel:+91` in `index.html`

**Current placeholders:**
- Main Phone: `+919876543210`
- Secondary Phone: `+911234567890`

**How to update:**
1. Open `index.html` file
2. Find: `<a href="tel:+919876543210">`
3. Replace `+919876543210` with your actual number (format: +91XXXXXXXXXX)
4. Save file

**Example:**
```html
<!-- Before -->
<a href="tel:+919876543210">+91 98765 43210</a>

<!-- After -->
<a href="tel:+919256001234">+91 92560 01234</a>
```

### WhatsApp Number

**Where to find:** Search for `wa.me` in `index.html` and `js/main.js`

**Files to update:**
- `index.html` - Multiple locations
- `js/main.js` - Line 10 in CONFIG section

**How to update:**
1. Replace all instances of `919876543210` with your WhatsApp number
2. Format: 91XXXXXXXXXX (no spaces, no + sign)

**Example:**
```javascript
// In js/main.js
const CONFIG = {
    emailRecipient: 'vasundramotorsjjr@gmail.com',
    whatsappNumber: '919256001234', // Your number here
};
```

### Email Address

**Current:** vasundramotorsjjr@gmail.com (This is correct!)

**If you need to change it:**
1. Open `js/main.js`
2. Find line: `emailRecipient: 'vasundramotorsjjr@gmail.com'`
3. Replace with new email
4. Save file

---

## 🕐 2. Update Business Hours

**Where to find:** Contact section in `index.html`

**Current hours:**
- Monday - Saturday: 9:00 AM - 7:00 PM
- Sunday: Closed

**How to update:**
1. Search for "Working Hours" in `index.html`
2. Find this section:
```html
<h4>Working Hours</h4>
<p>Monday - Saturday<br>9:00 AM - 7:00 PM</p>
<p class="text-muted">Sunday Closed</p>
```
3. Change the days and hours as needed
4. Save file

**Example:**
```html
<h4>Working Hours</h4>
<p>Monday - Sunday<br>8:00 AM - 8:00 PM</p>
<p class="text-muted">Open all days</p>
```

---

## 🏢 3. Update Business Address

**Where to find:** Contact section in `index.html`

**Current address:**
```
Vasundhra Motors
Main Road, Jhajjar
Haryana - 124103
India
```

**How to update:**
1. Search for "Main Road, Jhajjar" in `index.html`
2. Replace with your complete address
3. Maintain the `<br>` tags for line breaks
4. Save file

**Example:**
```html
<p>Vasundhra Motors<br>
Plot No. 123, Main Road<br>
Near City Hospital, Jhajjar<br>
Haryana - 124103<br>
India</p>
```

---

## 🗺️ 4. Update Google Maps Location

**Current:** Generic Jhajjar location (needs update!)

**How to update with exact location:**

### Step-by-Step:
1. Go to **Google Maps** (maps.google.com)
2. Search for your business or enter your exact address
3. Click on your location marker
4. Click **"Share"** button
5. Select **"Embed a map"** tab
6. Click **"Copy HTML"**
7. Open `index.html`
8. Find the Contact section (search for "contact-map")
9. Find this code:
```html
<div class="contact-map">
    <iframe src="[OLD MAP URL]" ...></iframe>
</div>
```
10. Replace the entire `<iframe>` tag with the new code you copied
11. Save file

**Important:** Keep the `class="contact-map"` div wrapper intact!

---

## 📸 5. Update Hero Slider Images

**Current images:** Stock photos from Unsplash

**Recommended:** Use your own workshop photos or Maruti car images

### To update slider images:

**Option A: Use URL images**
1. Upload your images to image hosting service (Imgur, Cloudinary, etc.)
2. Get the direct image URL
3. Open `index.html`
4. Find the slider section
5. Replace image URLs:

```html
<!-- Slide 1 -->
<img src="YOUR_IMAGE_URL_HERE" alt="Maruti Suzuki Service">
```

**Option B: Use local images**
1. Create folder: `images/`
2. Add your images: `slider1.jpg`, `slider2.jpg`, `slider3.jpg`
3. Update `index.html`:

```html
<img src="images/slider1.jpg" alt="Maruti Suzuki Service">
```

**Image requirements:**
- Size: 1920x1080 pixels (Full HD)
- Format: JPG or PNG
- File size: Under 500KB each (compress if needed)
- Aspect ratio: 16:9

### Update slider text:

**Where to find:** Hero Slider section in `index.html`

**Current text (Slide 1):**
```html
<h1 class="slide-heading">Authorized Maruti Suzuki Service</h1>
<p class="slide-subtext">Expert care. Genuine parts. Trained technicians.</p>
```

**How to change:**
1. Search for "slide-heading" in `index.html`
2. Update the text between the tags
3. Keep the text concise and impactful
4. Save file

---

## 💼 6. Update Services

**Where to find:** Services section in `index.html`

### To add a new service:

1. Find the services-grid section
2. Copy an existing service-card block
3. Paste it after the last card
4. Update the content:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-wrench"></i> <!-- Change icon -->
    </div>
    <h3>Your Service Name</h3>
    <p>Description of your service.</p>
</div>
```

### To change service description:

1. Find the service you want to update
2. Edit the `<h3>` (title) and `<p>` (description)
3. Save file

### Icon reference:
- Car: `fa-car`
- Wrench: `fa-wrench`
- Snowflake (AC): `fa-snowflake`
- Battery: `fa-car-battery`
- Tools: `fa-tools`

[Full icon list: fontawesome.com/icons]

---

## 📄 7. Update About Us Section

**Where to find:** About section in `index.html`

**Current text:** Generic business description

**How to personalize:**

1. Search for "About Vasundhra Motors" in `index.html`
2. Replace the paragraphs with your actual business story:
   - When you started
   - Your experience and expertise
   - Your mission and values
   - What makes you different
3. Keep paragraphs short and readable
4. Save file

**Example structure:**
```html
<p>Vasundhra Motors was established in 2010 with a commitment to provide 
exceptional Maruti Suzuki service in Jhajjar region...</p>

<p>With over 13 years of experience, our team of certified technicians 
has serviced thousands of Maruti vehicles...</p>
```

### Update statistics:

**Current stats:**
- 5000+ Happy Customers
- 10+ Years of Experience
- 100% Genuine Parts
- 24/7 Support Available

**How to update:**

1. Find "about-stats" section in `index.html`
2. Update the numbers and labels:

```html
<div class="stat-number">5000+</div> <!-- Change number -->
<div class="stat-label">Happy Customers</div> <!-- Change label -->
```

**Make them realistic and honest!**

---

## 🔗 8. Update Social Media Links

**Where to find:** Footer section in `index.html`

**Current:** Placeholder # links

**How to update:**

1. Search for "social-links" in `index.html`
2. Replace `#` with your actual social media URLs:

```html
<div class="social-links">
    <a href="https://facebook.com/yourpage" target="_blank">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://instagram.com/yourprofile" target="_blank">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://twitter.com/yourhandle" target="_blank">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://youtube.com/yourchannel" target="_blank">
        <i class="fab fa-youtube"></i>
    </a>
</div>
```

**Don't have social media?**
- Delete the links you don't need
- Or leave them as `#` (they'll do nothing when clicked)

---

## 🎨 9. Update Colors (Optional)

**Current colors:** Maruti Blue theme

**How to change:**

1. Open `css/style.css`
2. Find the `:root` section at the top
3. Change color values:

```css
:root {
    --maruti-blue: #0066B3;        /* Main blue */
    --maruti-dark-blue: #004A8F;   /* Dark blue */
    --maruti-light-blue: #E6F2FF;  /* Light blue */
}
```

4. Replace hex color codes with your brand colors
5. Save file

**Color picker tool:** google.com/search?q=color+picker

---

## 📋 10. Update SEO Meta Information

**What is SEO?** Helps your website rank on Google

**Where to find:** `<head>` section of `index.html`

**Current title:**
```html
<title>Vasundhra Motors - Authorized Maruti Suzuki Service Station | Jhajjar, Haryana</title>
```

**Current description:**
```html
<meta name="description" content="Vasundhra Motors - Authorized Maruti Suzuki Service Station in Jhajjar, Haryana...">
```

**How to improve:**
1. Include your city name
2. Include main services
3. Keep title under 60 characters
4. Keep description under 160 characters

**Example:**
```html
<title>Maruti Service Jhajjar | Vasundhra Motors | Car Repair & Maintenance</title>

<meta name="description" content="Best Maruti Suzuki service center in Jhajjar. Authorized service, genuine parts, expert technicians. Book your car service online today!">
```

---

## ✅ Quick Update Checklist

Before publishing changes, verify:

- [ ] Updated all phone numbers
- [ ] Updated WhatsApp numbers (HTML + JS)
- [ ] Confirmed email address is correct
- [ ] Updated business hours
- [ ] Updated complete address
- [ ] Updated Google Maps with exact location
- [ ] Replaced slider images (optional)
- [ ] Updated About Us with real information
- [ ] Updated statistics with accurate numbers
- [ ] Added social media links
- [ ] Updated SEO title and description
- [ ] Tested all contact links (call, WhatsApp, email)
- [ ] Checked website on mobile phone
- [ ] Tested booking form submission

---

## 🧰 Tools You'll Need

### Text Editors (choose one):
- **Notepad++** (Windows) - Free, simple
- **Visual Studio Code** (All platforms) - Free, professional
- **Sublime Text** (All platforms) - Free trial
- **TextEdit** (Mac) - Built-in, set to Plain Text mode

### Image Optimization:
- **TinyPNG.com** - Compress images for faster loading
- **Squoosh.app** - Google's image compressor

### Testing:
- **Chrome DevTools** - Press F12 to test website
- **Mobile Phone** - Test on actual device
- **PageSpeed Insights** - Check website speed

---

## ⚠️ Important Tips

### DO:
✅ Test changes on desktop and mobile
✅ Keep backups before making changes
✅ Update content regularly
✅ Use real, accurate information
✅ Compress images before uploading
✅ Test all links after updating

### DON'T:
❌ Delete HTML tags (like `<div>`, `</div>`)
❌ Remove quotation marks from code
❌ Change file names unless you know what you're doing
❌ Use very large images (slow loading)
❌ Put fake information or testimonials
❌ Forget to test the booking form

---

## 🆘 Common Issues

### Issue: Website looks broken after update
**Solution:** You likely deleted an HTML tag. Restore backup and try again carefully.

### Issue: Contact links not working
**Solution:** Check phone/email format. Must be exactly: `tel:+91XXXXXXXXXX` or `mailto:email@example.com`

### Issue: Images not showing
**Solution:** Check image URL is correct and accessible. Use image URL tester.

### Issue: Changes not visible
**Solution:** Clear browser cache (Ctrl+F5) or try in Incognito mode.

---

## 📞 Need Help?

If you're stuck:
1. Check this guide again carefully
2. Search your specific issue online
3. Ask a tech-savvy friend or hire a web developer
4. Contact via email: vasundramotorsjjr@gmail.com

---

## 🎯 Monthly Maintenance Tasks

### Every Month:
- [ ] Update business hours if changed
- [ ] Check all links are working
- [ ] Update About Us with recent achievements
- [ ] Add new services if launched
- [ ] Update statistics (customers served, etc.)
- [ ] Check mobile view is working properly
- [ ] Test booking form submission
- [ ] Review and respond to all bookings

### Every Quarter (3 months):
- [ ] Update slider images with fresh photos
- [ ] Refresh About Us content
- [ ] Add customer testimonials (if collected)
- [ ] Update service descriptions
- [ ] Check Google Maps accuracy
- [ ] Review SEO keywords and update
- [ ] Analyze booking conversion rate

---

## 🎉 You're Ready!

This guide covers all common content updates you'll need. Remember:
- **Start small** - Update one thing at a time
- **Test thoroughly** - Check changes on mobile and desktop
- **Keep backups** - Save original files before editing
- **Be patient** - Take your time to avoid mistakes

**Your website is your digital showroom. Keep it updated and accurate!**

---

**Last updated:** 2024  
**Website:** Vasundhra Motors - Authorized Maruti Suzuki Service