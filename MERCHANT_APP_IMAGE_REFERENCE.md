# Merchant App - Image and Styling Reference

This document summarizes all images used in each section and key styling instructions for the Merchant App project detail page. Use this as a backup reference if code gets corrupted.

## Section 1: "Settle: Designing Merchant Payments for Physical Shops"

### Content:
- **Eyebrow**: "Settle ASA • FINTECH 2019" (uppercase, tracking-wide)
- **Heading**: "Settle: Designing Merchant Payments for Physical Shops" (text-3xl md:text-5xl lg:text-6xl, font-bold, max-w-[90%])
- **Subtitle**: "Integrated Merchant payments in P2P payments app"

### Image/Video:
- **File**: `/image/settle app/settlegif1.mp4`
- **Type**: Video (not image)
- **Styling**:
  - Container: `rounded-[20px]`, `shadow-[0_8px_30px_rgba(0,0,0,0.08)]`
  - Scale: `img-scale-mobile md:img-scale-1-44` (1.44x on desktop)
  - Alignment: Right-aligned (`justify-end`, `md:ml-auto`)
  - Vertical alignment: Centered with text (`[&>div>div>div:last-child]:justify-center`)
  - Min height: 200px
  - Video props: `autoPlay`, `loop`, `muted`, `playsInline`
  - Object fit: `object-contain`

### Padding:
- **Top padding**: `!pt-[180px] md:!pt-[280px]` (with !important to override defaults)
- **Note**: This is significantly increased to move content down

---

## Section 2: "In 2019, Settle was a peer-to-peer payments app..." (Section 3 in code)

### Content:
- Text about Settle being a P2P payments app in 2019

### Image:
- **Status**: HIDDEN (`rightContent={null}`)
- **No image displayed**

---

## Section 3: Image-Only Section (After Section 2) - Appears as second visual section

### Image:
- **File**: `/image/settle app/settle app 2019.png.png`
- **Note**: File has double extension `.png.png`
- **Styling**:
  - Container: `md:w-2/3`, right-aligned (`justify-end`, `md:ml-auto`)
  - Scale: `img-scale-mobile md:img-scale-3` (3x on desktop)
  - Min height: 150px
  - Shadow: `shadow-[0_8px_30px_rgba(0,0,0,0.08)]`
  - Border radius: None (`rounded-none`)
  - Object fit: `object-contain`

### Padding:
- **Section padding**: `py-40 md:py-64` (double padding for image-only section)

---

## Section 4: "This work tested a hypothesis: that shops and merchant payments..." (Section 4 in code)

### Content:
- Heading: "This work tested a hypothesis: that shops and merchant payments could live inside a peer-to-peer payments app."
- Body text about different expectations and requirements

### Image:
- **File**: `/image/settle app/group image 1.png`
- **Styling**:
  - Container: `md:max-w-none` (no max width constraint)
  - Scale: `img-scale-mobile md:img-scale-1-32` (1.32x on desktop - 10% increase from 1.2x)
  - Alignment: Right-aligned (`md:ml-auto`)
  - Min height: 200px
  - Shadow: `shadow-[0_8px_30px_rgba(0,0,0,0.08)]`
  - Border radius: None (`rounded-none`)
  - Object fit: `object-contain`

---

## Section 5: Image-Only Section (After Section 4) - Appears as fourth visual section

### Image:
- **File**: `/image/settle app/settleasa03.png`
- **Styling**:
  - Container: `md:w-1/2`, right-aligned (`justify-end`, `md:ml-auto`)
  - Scale: `img-scale-mobile md:img-scale-3-3` (3.3x on desktop - 10% increase from 3x)
  - Border radius: `rounded-[16px]` (16px rounded corners)
  - Min height: 150px
  - Shadow: `shadow-[0_8px_30px_rgba(0,0,0,0.08)]`
  - Object fit: `object-contain`

### Padding:
- **Section padding**: `py-40 md:py-64` (double padding for image-only section)

---

## Section 6: "Merchant payments needed to be treated as a separate problem space" (Section 5 in code)

### Content:
- Heading: "Merchant payments needed to be treated as a separate problem space"
- Body text about design perspective and merchant transactions

### Image:
- **File**: `/image/settle app/settleasa06.png`
- **Styling**:
  - Container: `md:max-w-sm`, centered horizontally (`md:mx-auto`)
  - Scale: `img-scale-mobile md:img-scale-1-8` (1.8x on desktop)
  - Alignment: Centered horizontally, vertically centered with text
  - Min height: 200px
  - Shadow: `shadow-[0_8px_30px_rgba(0,0,0,0.08)]`
  - Border radius: None (`rounded-none`)
  - Object fit: `object-contain`
  - **Note**: Image is centered to align with text (not right-aligned like others)

### Padding:
- **Section padding**: `py-20 md:py-32 lg:py-40` (increased top/bottom padding)

---

## Section 7: "A merchant portal became necessary to support operational needs" (Section 6 in code)

### Content:
- Text about merchant portal requirements

### Image:
- **Status**: HIDDEN (`rightContent={null}`)
- **No image displayed**

---

## Section 8: "Designing across connected touchpoints instead of a single flow" (Section 7 in code)

### Content:
- Heading: "Designing across connected touchpoints instead of a single flow"
- Body text about merchant setup, customer ordering, and QR codes

### Image:
- **File**: `/image/settle app/settleasa1410.png`
- **Styling**:
  - Container: `md:max-w-sm`, right-aligned (`md:ml-auto`)
  - Scale: `img-scale-mobile md:img-scale-3-6` (3.6x on desktop - doubled from 1.8x)
  - Transform origin: `top center`
  - Min height: 200px
  - Shadow: `shadow-[0_8px_30px_rgba(0,0,0,0.08)]`
  - Border radius: None (`rounded-none`)
  - Object fit: `object-contain`
  - Alignment: Right-aligned, top-aligned with text

---

## Section 9: "Scoping the first version to enable learning" (Section 8 in code)

### Content:
- Text about scoping the first version

### Image:
- **Status**: HIDDEN (`rightContent={null}`)
- **No image displayed**

---

## Section 10: "What this work made possible" (Bounded Container) (Section 9 in code)

### Content:
- Heading: "What this work made possible"
- Bullet list of achievements

### Image:
- **File**: `/image/settle app/settleasa10.png`
- **Styling**:
  - Container: `md:max-w-sm`, right-aligned (`md:ml-auto`)
  - Scale: `img-scale-mobile md:img-scale-1-44` (1.44x on desktop)
  - Min height: 200px
  - Shadow: `shadow-[0_8px_30px_rgba(0,0,0,0.08)]`
  - Border radius: None (`rounded-none`)
  - Object fit: `object-contain`

### Container Styling:
- **Background**: `#171717` (dark gray)
- **Border**: `border-[hsl(var(--border))]`
- **Border radius**: `rounded-xl`
- **Shadow**: `shadow-lg`
- **Padding**: `py-24 md:py-36 lg:py-48 px-8 md:px-12 lg:px-16`
- **Note**: Padding is symmetric (px applies to both left and right)
- **Content**: No max-width constraints on left or right content (removed for equal padding)

---

## General Styling Rules for All Images:

1. **Border Radius**: All images use `rounded-none` EXCEPT:
   - Section 1 video: `rounded-[20px]`
   - Section 5 image-only: `rounded-[16px]`

2. **Shadow**: All images use `shadow-[0_8px_30px_rgba(0,0,0,0.08)]` (subtle lighter shadow)

3. **Object Fit**: All images use `object-contain` (no cropping)

4. **Min Height**: 
   - Regular sections: 200px
   - Image-only sections: 150px

5. **Mobile Scaling**: All images use `img-scale-mobile` class (scale 1x on mobile)

6. **Alignment**: 
   - Most images: Right-aligned (`md:ml-auto`)
   - Section 6: Centered (`md:mx-auto`) and vertically centered with text
   - Section 1: Right-aligned but vertically centered with text

7. **Responsive Classes**: Defined in `globals.css`:
   - `.img-scale-1-2` = scale(1.2)
   - `.img-scale-1-32` = scale(1.32)
   - `.img-scale-1-44` = scale(1.44)
   - `.img-scale-1-8` = scale(1.8)
   - `.img-scale-3` = scale(3)
   - `.img-scale-3-3` = scale(3.3)
   - `.img-scale-3-6` = scale(3.6)

---

## Body Text Styling (All Sections):

- **Font size**: `text-sm md:text-base` (reduced by 2 sizes from original)
- **Font weight**: `font-normal` (regular, not light)
- **Line height**: `leading-relaxed`

---

## Section Padding Defaults:

- **Default section padding**: `py-16 md:py-24 lg:py-32`
- **Section 1**: `!pt-[180px] md:!pt-[280px]` (custom top padding with !important)
- **Section 5**: `py-20 md:py-32 lg:py-40` (increased padding)
- **Image-only sections**: `py-40 md:py-64` (double padding)

---

## Key Instructions Summary:

1. **Section 1**: Video with 20px border radius, 1.44x scale, vertically centered with text, increased top padding
2. **Section 2**: No image (hidden)
3. **Section 3**: Image-only, 3x scale, right-aligned, double padding
4. **Section 4**: Group image, 1.32x scale, right-aligned
5. **Section 5**: Image-only, 3.3x scale, 16px border radius, right-aligned, double padding
6. **Section 6**: Centered image, 1.8x scale, vertically centered with text, increased section padding
7. **Section 7**: No image (hidden)
8. **Section 8**: Large image, 3.6x scale, right-aligned, top-aligned
9. **Section 9**: No image (hidden)
10. **Section 10**: Bounded container, 1.44x scale, right-aligned, symmetric padding

---

## File Path Reference:

All images are located in: `/public/image/settle app/`

**Important**: The file `settle app 2019.png.png` has a double extension - make sure to reference it correctly in code.

