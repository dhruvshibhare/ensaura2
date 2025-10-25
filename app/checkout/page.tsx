'use client';

import { useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { findProductById } from '@/lib/products';
import { formatInr } from '@/lib/utils';

export default function CheckoutPage() {
  const params = useSearchParams();
  const router = useRouter();
  const productId = params.get('productId') ?? '';
  const initialQty = Number(params.get('quantity') ?? '1');
  const [quantity, setQuantity] = useState<number>(initialQty > 0 ? initialQty : 1);

  // Customer details state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [alternatePhone, setAlternatePhone] = useState('');
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const product = useMemo(() => (productId ? findProductById(productId) : undefined), [productId]);
  const subtotal = product ? product.price * quantity : 0;
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  // Using provided SheetDB endpoint
  const sheetsWebhookUrl = 'https://sheetdb.io/api/v1/xnt4ain0t4srk';

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!fullName) newErrors.fullName = 'Full name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email';
    
    if (!phone) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(phone)) newErrors.phone = 'Please enter a valid 10-digit phone number';
    
    if (alternatePhone && !/^[6-9]\d{9}$/.test(alternatePhone)) {
      newErrors.alternatePhone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!address) newErrors.address = 'Address is required';
    if (!city) newErrors.city = 'City is required';
    if (!state) newErrors.state = 'State is required';
    
    if (!pin) newErrors.pin = 'PIN code is required';
    else if (!/^\d{6}$/.test(pin)) newErrors.pin = 'Please enter a valid 6-digit PIN code';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitDetails = async () => {
    if (!product) return;
    if (!validateForm()) {
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        timestamp: new Date().toISOString(),
        source: 'checkout',
        fullName,
        email,
        phone,
        alternatePhone,
        address,
        landmark,
        city,
        state,
        pin,
        productId: product.id,
        productName: product.name,
        quantity,
        subtotal,
        shipping,
        total,
      };
      await fetch(sheetsWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      // After saving details, open WhatsApp with pre-filled message
      window.open(whatsappHref, '_blank');
    } catch (err) {
      window.alert('Failed to submit details. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappNumber = '918882930034';
  const whatsappMessage = encodeURIComponent(
    product
      ? `Hello, I'd like to order:\n- ${product.name} x ${quantity}\nTotal: ₹${total}\n\nCustomer:\n${fullName}\n${phone}\n${address}, ${city}, ${state} - ${pin}`
      : 'Hello, I would like to place an order.'
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Form */
          }
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-display font-semibold text-foreground">Shipping Address (India)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input 
                      placeholder="Full Name *" 
                      value={fullName} 
                      onChange={(e) => setFullName(e.target.value)}
                      className={errors.fullName ? "border-red-500" : ""} 
                    />
                    {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Input 
                      placeholder="Email Address *" 
                      type="email"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      className={errors.email ? "border-red-500" : ""} 
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input 
                      placeholder="Phone Number *" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)}
                      className={errors.phone ? "border-red-500" : ""} 
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <Input 
                      placeholder="Alternate Phone Number (Optional)" 
                      value={alternatePhone} 
                      onChange={(e) => setAlternatePhone(e.target.value)}
                      className={errors.alternatePhone ? "border-red-500" : ""} 
                    />
                    {errors.alternatePhone && <p className="text-xs text-red-500">{errors.alternatePhone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Input 
                    placeholder="Address Line *" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)}
                    className={errors.address ? "border-red-500" : ""} 
                  />
                  {errors.address && <p className="text-xs text-red-500">{errors.address}</p>}
                </div>

                <Input 
                  placeholder="Landmark (Optional)" 
                  value={landmark} 
                  onChange={(e) => setLandmark(e.target.value)}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Input 
                      placeholder="City *" 
                      value={city} 
                      onChange={(e) => setCity(e.target.value)}
                      className={errors.city ? "border-red-500" : ""} 
                    />
                    {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Select value={state} onValueChange={setState}>
                      <SelectTrigger className={errors.state ? "border-red-500" : ""}>
                        <SelectValue placeholder="State *" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 
                          'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 
                          'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 
                          'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 
                          'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 
                          'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
                          'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
                          'Andaman and Nicobar Islands', 'Chandigarh', 
                          'Dadra and Nagar Haveli and Daman and Diu', 
                          'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 
                          'Puducherry'
                        ].map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.state && <p className="text-xs text-red-500">{errors.state}</p>}
                  </div>

                  <div className="space-y-2">
                    <Input 
                      placeholder="PIN Code *" 
                      value={pin} 
                      onChange={(e) => setPin(e.target.value)}
                      className={errors.pin ? "border-red-500" : ""} 
                    />
                    {errors.pin && <p className="text-xs text-red-500">{errors.pin}</p>}
                  </div>
                </div>
                <p className="text-sm text-gray-500">* Required fields</p>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-display font-semibold text-foreground">Order Summary</h2>
                {product ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-foreground/80">{product.name}</div>
                      <div className="text-sm font-medium">{formatInr(product.price)}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-foreground/80">Quantity</div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
                        <span className="w-6 text-center">{quantity}</span>
                        <Button variant="outline" size="sm" onClick={() => setQuantity(q => q + 1)}>+</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="text-sm text-foreground/80">Subtotal</div>
                      <div className="text-sm font-medium">{formatInr(subtotal)}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-foreground/80">Shipping</div>
                      <div className="text-sm font-medium">{shipping === 0 ? 'Free' : formatInr(shipping)}</div>
                    </div>
                    <div className="flex items-center justify-between text-foreground font-semibold text-lg pt-2 border-t">
                      <div>Total</div>
                      <div>{formatInr(total)}</div>
                    </div>
                    <div>
                      <Button
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                        disabled={submitting}
                        onClick={handleSubmitDetails}
                      >
                        {submitting ? 'Processing...' : 'Order via WhatsApp'}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-foreground/80">No product selected.</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


