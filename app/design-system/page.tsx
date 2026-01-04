import GradientTest from '@/components/GradientTest'

export default function DesignSystemPage() {
  const colors = [
    { name: 'Background', value: 'hsl(var(--background))', hsl: '0 0% 4%' },
    { name: 'Foreground', value: 'hsl(var(--foreground))', hsl: '0 0% 100%' },
    { name: 'Card', value: 'hsl(var(--card))', hsl: '0 0% 4%' },
    { name: 'Card Foreground', value: 'hsl(var(--card-foreground))', hsl: '0 0% 100%' },
    { name: 'Popover', value: 'hsl(var(--popover))', hsl: '0 0% 4%' },
    { name: 'Popover Foreground', value: 'hsl(var(--popover-foreground))', hsl: '0 0% 100%' },
    { name: 'Primary', value: 'hsl(var(--primary))', hsl: '0 0% 100%' },
    { name: 'Primary Foreground', value: 'hsl(var(--primary-foreground))', hsl: '0 0% 4%' },
    { name: 'Secondary', value: 'hsl(var(--secondary))', hsl: '0 0% 15%' },
    { name: 'Secondary Foreground', value: 'hsl(var(--secondary-foreground))', hsl: '0 0% 100%' },
    { name: 'Muted', value: 'hsl(var(--muted))', hsl: '0 0% 15%' },
    { name: 'Muted Foreground', value: 'hsl(var(--muted-foreground))', hsl: '0 0% 65%' },
    { name: 'Accent', value: 'hsl(var(--accent))', hsl: '0 0% 15%' },
    { name: 'Accent Foreground', value: 'hsl(var(--accent-foreground))', hsl: '0 0% 100%' },
    { name: 'Destructive', value: 'hsl(var(--destructive))', hsl: '0 62.8% 30.6%' },
    { name: 'Destructive Foreground', value: 'hsl(var(--destructive-foreground))', hsl: '0 0% 100%' },
    { name: 'Border', value: 'hsl(var(--border))', hsl: '0 0% 20%' },
    { name: 'Input', value: 'hsl(var(--input))', hsl: '0 0% 20%' },
    { name: 'Ring', value: 'hsl(var(--ring))', hsl: '0 0% 100%' },
  ]

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold">Design System</h1>
          <p className="text-[hsl(var(--muted-foreground))]">
            Complete design system documentation for the portfolio website
          </p>
        </header>

        {/* Color Palette Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colors.map((color) => (
              <div
                key={color.name}
                className="border border-[hsl(var(--border))] rounded-lg p-4 space-y-2"
              >
                <div
                  className="w-full h-20 rounded-md border border-[hsl(var(--border))]"
                  style={{ backgroundColor: color.value }}
                />
                <div>
                  <p className="font-medium">{color.name}</p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {color.hsl}
                  </p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono">
                    {color.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Typography</h2>
          <div className="space-y-4 border border-[hsl(var(--border))] rounded-lg p-6">
            <div>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">
                Font Family
              </p>
              <p className="text-lg">Space Grotesk</p>
            </div>
            <div>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">
                Font Weights
              </p>
              <p className="text-lg">400, 500, 600, 700</p>
            </div>
            <div>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">
                Font Features
              </p>
              <p className="text-lg font-mono">"rlig" 1, "calt" 1</p>
            </div>
            <div className="space-y-4 pt-4 border-t border-[hsl(var(--border))]">
              <div>
                <h1 className="text-4xl font-bold mb-2">H1 Heading</h1>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  font-size: 2.25rem (36px) | font-weight: 700
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-2">H2 Heading</h2>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  font-size: 1.875rem (30px) | font-weight: 600
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">H3 Heading</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  font-size: 1.5rem (24px) | font-weight: 600
                </p>
              </div>
              <div>
                <p className="text-base mb-2">Body Text</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  font-size: 1rem (16px) | font-weight: 400
                </p>
              </div>
              <div>
                <p className="text-sm mb-2">Small Text</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">
                  font-size: 0.875rem (14px) | font-weight: 400
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Spacing</h2>
          <div className="border border-[hsl(var(--border))] rounded-lg p-6 space-y-4">
            {[4, 8, 12, 16, 24, 32, 48, 64].map((size) => (
              <div key={size} className="flex items-center gap-4">
                <div className="w-20 text-sm text-[hsl(var(--muted-foreground))]">
                  {size}px
                </div>
                <div className="flex-1 h-8 bg-[hsl(var(--secondary))] rounded" style={{ width: `${size}px` }} />
              </div>
            ))}
          </div>
        </section>

        {/* Components Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Components</h2>
          <div className="border border-[hsl(var(--border))] rounded-lg p-6 space-y-6">
            <div>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                Button Variants
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md font-medium">
                  Primary
                </button>
                <button className="px-4 py-2 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-md font-medium">
                  Secondary
                </button>
                <button className="px-4 py-2 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] rounded-md font-medium">
                  Accent
                </button>
                <button className="px-4 py-2 bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] rounded-md font-medium">
                  Destructive
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                Button Sizes
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-3 py-1.5 text-sm bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md font-medium">
                  Small
                </button>
                <button className="px-4 py-2 text-base bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md font-medium">
                  Medium
                </button>
                <button className="px-6 py-3 text-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md font-medium">
                  Large
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient System Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Gradient System</h2>
          <div className="border border-[hsl(var(--border))] rounded-lg p-6 space-y-4">
            <div>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                Gradient Test Component
              </p>
              <div className="flex justify-center">
                <GradientTest />
              </div>
            </div>
            <div className="space-y-2 pt-4 border-t border-[hsl(var(--border))]">
              <h3 className="text-xl font-semibold">Usage Instructions</h3>
              <div className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                <p>
                  <strong>Class Name:</strong> <code className="font-mono bg-[hsl(var(--secondary))] px-2 py-1 rounded">deep-green-bg</code>
                </p>
                <p>
                  <strong>Location:</strong> Defined in <code className="font-mono bg-[hsl(var(--secondary))] px-2 py-1 rounded">app/globals.css</code> under <code className="font-mono bg-[hsl(var(--secondary))] px-2 py-1 rounded">@layer components</code>
                </p>
                <p>
                  <strong>Implementation:</strong> Simply add the <code className="font-mono bg-[hsl(var(--secondary))] px-2 py-1 rounded">deep-green-bg</code> class to any element. The gradient is defined entirely through CSS variables.
                </p>
                <p>
                  <strong>Example:</strong>
                </p>
                <pre className="bg-[hsl(var(--secondary))] p-4 rounded-md font-mono text-xs overflow-x-auto">
{`<div className="deep-green-bg w-[400px] h-[300px] rounded-lg" />`}
                </pre>
                <p className="pt-2">
                  <strong>Important:</strong> Never use inline gradient styles. Always use the <code className="font-mono bg-[hsl(var(--secondary))] px-2 py-1 rounded">deep-green-bg</code> class. All gradient configuration is managed through CSS variables in <code className="font-mono bg-[hsl(var(--secondary))] px-2 py-1 rounded">globals.css</code>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}



