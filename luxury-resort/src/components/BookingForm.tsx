// import React, { useState } from 'react';
// import { CalendarIcon, Users, Baby, Utensils, MapPin, Check, X, Bed, Coffee } from 'lucide-react';

// // Mock UI Components
// const Button = ({ children, className = '', variant = 'default', type = 'button' as 'button' | 'submit' | 'reset', onClick = () => { }, disabled = false, ...props }) => {
//     const baseStyle = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2';
//     const variants = {
//         default: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300',
//         outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50',
//         ghost: 'text-gray-600 hover:bg-gray-100',
//         success: 'bg-green-600 text-white hover:bg-green-700'
//     };

//     return (

//         <button
//             type={type}
//             className={`${baseStyle} ${variants[variant]} ${className}`}
//             onClick={onClick}
//             disabled={disabled}
//             {...props}
//         >
//             {children}
//         </button>
//     );
// };

// const Input = ({ className = '', ...props }) => (
//     <input className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`} {...props} />
// );

// // const Label = ({ children, htmlFor }) => (
// //     <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">{children}</label>
// // );
// const Label = ({ children, htmlFor = '', className = '' }) => (
//     <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}>{children}</label>
// );

// const Select = ({ children, value, onValueChange, className = '' }) => {
//     return (
//         <select
//             value={value}
//             onChange={(e) => onValueChange(e.target.value)}
//             className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
//         >
//             {children}
//         </select>
//     );
// };

// const SelectItem = ({ children, value }) => <option value={value}>{children}</option>;

// const Textarea = ({ className = '', ...props }) => (
//     <textarea className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical ${className}`} {...props} />
// );

// const Checkbox = ({ checked, onCheckedChange, id }) => (
//     <input
//         type="checkbox"
//         id={id}
//         checked={checked}
//         onChange={(e) => onCheckedChange(e.target.checked)}
//         className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
//     />
// );

// const Card = ({ children, className = '' }) => (
//     <div className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden ${className}`}>
//         {children}
//     </div>
// );

// const CardContent = ({ children, className = '' }) => (
//     <div className={`${className}`}>
//         {children}
//     </div>
// );

// const Dialog = ({ open, onOpenChange, children }) => {
//     if (!open) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
//             <div className="bg-white rounded-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto my-8">
//                 <div className="sticky top-0 bg-white border-b p-4 flex justify-end">
//                     <Button
//                         variant="ghost"
//                         onClick={() => onOpenChange(false)}
//                         className="p-2"
//                     >
//                         <X size={20} />
//                     </Button>
//                 </div>
//                 {children}
//             </div>
//         </div>
//     );
// };

// const DialogContent = ({ children }) => children;
// const DialogHeader = ({ children }) => <div className="px-8 pt-4">{children}</div>;
// const DialogTitle = ({ children, className = '' }) => (
//     <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${className}`}>{children}</h2>
// );

// // Enhanced Booking Form Component
// export default function BookingForm({ children, onClose }: { children: React.ReactNode, onClose?: () => void }){

//     const [isOpen, setIsOpen] = useState(children ? false : true);
//     const [showConfirmation, setShowConfirmation] = useState(false);
//     const [bookingType, setBookingType] = useState('accommodation');
//     const [checkInDate, setCheckInDate] = useState('');
//     const [checkOutDate, setCheckOutDate] = useState('');
//     const [formData, setFormData] = useState({
//         roomType: '',
//         adults: '2',
//         children: '0',
//         childrenAges: [] as string[],
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         diningBreakfast: false,
//         diningLunch: false,
//         diningDinner: false,
//         specialRequests: '',
//         airportTransfer: false,
//         diningDate: '',
//         diningTime: '',
//         diningGuests: '2'

//     });

//     const roomTypes = [
//         { value: 'standard', label: 'Standard Sea View Room', price: 850, description: 'Comfortable room with stunning ocean views' },
//         { value: 'family', label: 'Family Room', price: 1200, description: 'Spacious room perfect for families with children' },
//         { value: 'premium', label: 'Premium Beachfront Suite', price: 1650, description: 'Luxurious suite with direct beach access' }
//     ];

//     const diningOptions = [
//         { key: 'diningBreakfast', label: 'Breakfast', price: 150, time: '07:00 - 10:00', description: 'Continental and cooked breakfast options' },
//         { key: 'diningLunch', label: 'Lunch', price: 200, time: '12:00 - 15:00', description: 'Light meals and fresh seafood' },
//         { key: 'diningDinner', label: 'Dinner', price: 300, time: '18:00 - 22:00', description: 'Fine dining with ocean views' }
//     ];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setShowConfirmation(true);
//     };

//     const handleConfirmBooking = () => {
//         console.log('Booking confirmed:', { ...formData, checkInDate, checkOutDate, bookingType });
//         alert('Booking confirmed! You will receive a confirmation email shortly.');
//         setIsOpen(false);
//         setShowConfirmation(false);

//         // Reset form
//         setFormData({
//             roomType: '',
//             adults: '2',
//             children: '0',
//             childrenAges: [],
//             firstName: '',
//             lastName: '',
//             email: '',
//             phone: '',
//             diningBreakfast: false,
//             diningLunch: false,
//             diningDinner: false,
//             specialRequests: '',
//             airportTransfer: false,
//             diningDate: '',
//             diningTime: '',
//             diningGuests: '2'
//         });
//         setCheckInDate('');
//         setCheckOutDate('');
//     };

//     const handleChildrenChange = (value) => {
//         const numChildren = parseInt(value);
//         setFormData(prev => ({
//             ...prev,
//             children: value,
//             childrenAges: Array(numChildren).fill('')
//         }));
//     };

//     const handleChildAgeChange = (index, age) => {
//         const newAges = [...formData.childrenAges];
//         newAges[index] = age;
//         setFormData(prev => ({ ...prev, childrenAges: newAges }));
//     };

//     const calculateNights = () => {
//         if (checkInDate && checkOutDate) {
//             const start = new Date(checkInDate);
//             const end = new Date(checkOutDate);
//             const diffTime = Math.abs(end.getTime() - start.getTime());
//             return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//         }
//         return 0;
//     };

//     const calculateTotal = () => {
//         let total = 0;

//         if (bookingType === 'accommodation') {
//             const selectedRoom = roomTypes.find(room => room.value === formData.roomType);
//             if (selectedRoom && checkInDate && checkOutDate) {
//                 const nights = calculateNights();
//                 total += selectedRoom.price * nights;
//             }

//             // Add dining costs
//             const totalGuests = parseInt(formData.adults) + parseInt(formData.children);
//             if (formData.diningBreakfast) total += 150 * totalGuests * calculateNights();
//             if (formData.diningLunch) total += 200 * totalGuests * calculateNights();
//             if (formData.diningDinner) total += 300 * totalGuests * calculateNights();

//             // Add airport transfer
//             if (formData.airportTransfer) total += 800;
//         } else {
//             // Dining only
//             const totalGuests = parseInt(formData.diningGuests);
//             if (formData.diningBreakfast) total += 150 * totalGuests;
//             if (formData.diningLunch) total += 200 * totalGuests;
//             if (formData.diningDinner) total += 300 * totalGuests;
//         }

//         return total;
//     };

//     const formatDate = (dateString) => {
//         if (!dateString) return '';
//         return new Date(dateString).toLocaleDateString('en-GB', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         });
//     };

//     const openBookingForm = (type) => {
//         setBookingType(type);
//         setIsOpen(true);
//         setShowConfirmation(false);

//     };

//     const handleClose = () => {
//         setIsOpen(false);
//         if (onClose) {
//             onClose();
//         }
//     };
//     return (
//         <>
//             {children && (
//                 <div onClick={() => setIsOpen(true)} className="cursor-pointer">
//                     {children}
//                 </div>
//             )}

//             {!children && (
//                 <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
//                     <div className="max-w-4xl mx-auto">
//                         <div className="text-center mb-12">
//                             <h1 className="text-4xl font-bold text-gray-900 mb-4">Coastal Beach Resort</h1>
//                             <p className="text-xl text-gray-600">Experience luxury by the ocean</p>
//                         </div>
//                         {/* Trigger Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
//                             <Button
//                                 onClick={() => openBookingForm('accommodation')}
//                                 className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-6 text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
//                             >
//                                 <Bed size={24} />
//                                 Book Accommodation
//                             </Button>

//                             <Button
//                                 onClick={() => openBookingForm('dining')}
//                                 className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-6 text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200"
//                             >
//                                 <Utensils size={24} />
//                                 Book Dining Only
//                             </Button>
//                         </div>

//                         {/* Feature Cards */}
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                             <Card className="text-center hover:shadow-xl transition-shadow duration-300">
//                                 <CardContent className="p-6">
//                                     <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                         <MapPin size={32} className="text-blue-600" />
//                                     </div>
//                                     <h3 className="text-lg font-semibold mb-2">Prime Location</h3>
//                                     <p className="text-gray-600 text-sm">Direct beach access with stunning ocean views</p>
//                                 </CardContent>
//                             </Card>

//                             <Card className="text-center hover:shadow-xl transition-shadow duration-300">
//                                 <CardContent className="p-6">
//                                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                         <Utensils size={32} className="text-green-600" />
//                                     </div>
//                                     <h3 className="text-lg font-semibold mb-2">Fine Dining</h3>
//                                     <p className="text-gray-600 text-sm">Fresh seafood and international cuisine</p>
//                                 </CardContent>
//                             </Card>

//                             <Card className="text-center hover:shadow-xl transition-shadow duration-300">
//                                 <CardContent className="p-6">
//                                     <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                         <Users size={32} className="text-purple-600" />
//                                     </div>
//                                     <h3 className="text-lg font-semibold mb-2">Family Friendly</h3>
//                                     <p className="text-gray-600 text-sm">Perfect for families and couples alike</p>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </div>

//                     {/* Main Booking Dialog */}
//                     <Dialog open={isOpen && !showConfirmation} onOpenChange={handleClose}>
//                         <DialogContent>
//                             <DialogHeader>
//                                 <DialogTitle className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
//                                     {bookingType === 'accommodation' ? 'Book Your Stay at Coastal Beach Resort' : 'Reserve Your Dining Experience'}
//                                 </DialogTitle>
//                             </DialogHeader>

//                             <div className="px-8 pb-8">
//                                 <form onSubmit={handleSubmit} className="space-y-8">
//                                     <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
//                                         {/* Left Column */}
//                                         <div className="space-y-6">
//                                             {bookingType === 'accommodation' ? (
//                                                 // Accommodation Booking
//                                                 <Card className="hover:shadow-xl transition-shadow duration-300">
//                                                     <CardContent className="p-6">
//                                                         <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
//                                                             <MapPin size={24} className="text-blue-600" />
//                                                             Accommodation Details
//                                                         </h3>

//                                                         <div className="space-y-6">
//                                                             <div>
//                                                                 <Label htmlFor="roomType">Room Type *</Label>
//                                                                 <Select value={formData.roomType} onValueChange={(value) => setFormData(prev => ({ ...prev, roomType: value }))}>
//                                                                     <option value="">Select room type</option>
//                                                                     {roomTypes.map((room) => (
//                                                                         <SelectItem key={room.value} value={room.value}>
//                                                                             {room.label} - R{room.price}/night
//                                                                         </SelectItem>
//                                                                     ))}
//                                                                 </Select>
//                                                                 {formData.roomType && (
//                                                                     <p className="text-sm text-gray-600 mt-2">
//                                                                         {roomTypes.find(r => r.value === formData.roomType)?.description}
//                                                                     </p>
//                                                                 )}
//                                                             </div>

//                                                             <div className="grid grid-cols-2 gap-4">
//                                                                 <div>
//                                                                     <Label htmlFor="checkIn">Check-in Date *</Label>
//                                                                     <Input
//                                                                         id="checkIn"
//                                                                         type="date"
//                                                                         value={checkInDate}
//                                                                         onChange={(e) => setCheckInDate(e.target.value)}
//                                                                         min={new Date().toISOString().split('T')[0]}
//                                                                         required
//                                                                     />
//                                                                 </div>
//                                                                 <div>
//                                                                     <Label htmlFor="checkOut">Check-out Date *</Label>
//                                                                     <Input
//                                                                         id="checkOut"
//                                                                         type="date"
//                                                                         value={checkOutDate}
//                                                                         onChange={(e) => setCheckOutDate(e.target.value)}
//                                                                         min={checkInDate || new Date().toISOString().split('T')[0]}
//                                                                         required
//                                                                     />
//                                                                 </div>
//                                                             </div>

//                                                             <div className="grid grid-cols-2 gap-4">
//                                                                 <div>
//                                                                     <Label htmlFor="adults">Adults *</Label>
//                                                                     <Select value={formData.adults} onValueChange={(value) => setFormData(prev => ({ ...prev, adults: value }))}>
//                                                                         {[1, 2, 3, 4, 5, 6].map((num) => (
//                                                                             <SelectItem key={num} value={num.toString()}>
//                                                                                 {num} {num === 1 ? 'Adult' : 'Adults'}
//                                                                             </SelectItem>
//                                                                         ))}
//                                                                     </Select>
//                                                                 </div>
//                                                                 <div>
//                                                                     <Label htmlFor="children">Children</Label>
//                                                                     <Select value={formData.children} onValueChange={handleChildrenChange}>
//                                                                         {[0, 1, 2, 3, 4].map((num) => (
//                                                                             <SelectItem key={num} value={num.toString()}>
//                                                                                 {num} {num === 1 ? 'Child' : 'Children'}
//                                                                             </SelectItem>
//                                                                         ))}
//                                                                     </Select>
//                                                                 </div>
//                                                             </div>

//                                                             {parseInt(formData.children) > 0 && (
//                                                                 <div>
//                                                                     <Label htmlFor="">Children's Ages</Label>                                                            <div className="grid grid-cols-2 gap-3 mt-2">
//                                                                         {formData.childrenAges.map((age, index) => (
//                                                                             <Select key={index} value={age} onValueChange={(value) => handleChildAgeChange(index, value)}>
//                                                                                 <option value="">Child {index + 1} age</option>
//                                                                                 {Array.from({ length: 17 }, (_, i) => (
//                                                                                     <SelectItem key={i} value={i.toString()}>
//                                                                                         {i} {i === 1 ? 'year' : 'years'} old
//                                                                                     </SelectItem>
//                                                                                 ))}
//                                                                             </Select>
//                                                                         ))}
//                                                                     </div>
//                                                                 </div>
//                                                             )}
//                                                         </div>
//                                                     </CardContent>
//                                                 </Card>
//                                             ) : (
//                                                 // Dining Only Booking
//                                                 <Card className="hover:shadow-xl transition-shadow duration-300">
//                                                     <CardContent className="p-6">
//                                                         <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
//                                                             <Coffee size={24} className="text-green-600" />
//                                                             Dining Reservation
//                                                         </h3>

//                                                         <div className="space-y-6">
//                                                             <div className="grid grid-cols-2 gap-4">
//                                                                 <div>
//                                                                     <Label htmlFor="diningDate">Dining Date *</Label>
//                                                                     <Input
//                                                                         id="diningDate"
//                                                                         type="date"
//                                                                         value={formData.diningDate}
//                                                                         onChange={(e) => setFormData(prev => ({ ...prev, diningDate: e.target.value }))}
//                                                                         min={new Date().toISOString().split('T')[0]}
//                                                                         required
//                                                                     />
//                                                                 </div>
//                                                                 <div>
//                                                                     <Label htmlFor="diningGuests">Number of Guests *</Label>
//                                                                     <Select value={formData.diningGuests} onValueChange={(value) => setFormData(prev => ({ ...prev, diningGuests: value }))}>
//                                                                         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
//                                                                             <SelectItem key={num} value={num.toString()}>
//                                                                                 {num} {num === 1 ? 'Guest' : 'Guests'}
//                                                                             </SelectItem>
//                                                                         ))}
//                                                                     </Select>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </CardContent>
//                                                 </Card>
//                                             )}

//                                             {/* Dining Options */}
//                                             <Card className="hover:shadow-xl transition-shadow duration-300">
//                                                 <CardContent className="p-6">
//                                                     <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
//                                                         <Utensils size={24} className="text-orange-600" />
//                                                         Dining Options
//                                                     </h3>

//                                                     <div className="space-y-4">
//                                                         {diningOptions.map((option) => (
//                                                             <div key={option.key} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
//                                                                 <div className="flex items-start space-x-3">
//                                                                     <Checkbox
//                                                                         id={option.key}
//                                                                         checked={formData[option.key]}
//                                                                         onCheckedChange={(checked) => setFormData(prev => ({ ...prev, [option.key]: checked }))}
//                                                                     />
//                                                                     <div className="flex-1">
//                                                                         <Label htmlFor={option.key} className="text-base font-medium cursor-pointer">
//                                                                             {option.label} - R{option.price} per person
//                                                                         </Label>
//                                                                         <p className="text-sm text-gray-600 mt-1">
//                                                                             {option.time} • {option.description}
//                                                                         </p>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         ))}

//                                                         {bookingType === 'accommodation' && (
//                                                             <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
//                                                                 <div className="flex items-start space-x-3">
//                                                                     <Checkbox
//                                                                         id="airport"
//                                                                         checked={formData.airportTransfer}
//                                                                         onCheckedChange={(checked) => setFormData(prev => ({ ...prev, airportTransfer: checked }))}
//                                                                     />
//                                                                     <div className="flex-1">
//                                                                         <Label htmlFor="airport" className="text-base font-medium cursor-pointer">
//                                                                             Airport Transfer Service - R800 return
//                                                                         </Label>
//                                                                         <p className="text-sm text-gray-600 mt-1">
//                                                                             Return transfer from King Shaka International Airport
//                                                                         </p>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         )}
//                                                     </div>
//                                                 </CardContent>
//                                             </Card>
//                                         </div>

//                                         {/* Right Column */}
//                                         <div className="space-y-6">
//                                             {/* Contact Information */}
//                                             <Card className="hover:shadow-xl transition-shadow duration-300">
//                                                 <CardContent className="p-6">
//                                                     <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
//                                                         <Users size={24} className="text-purple-600" />
//                                                         Contact Information
//                                                     </h3>

//                                                     <div className="space-y-4">
//                                                         <div className="grid grid-cols-2 gap-4">
//                                                             <div>
//                                                                 <Label htmlFor="firstName">First Name *</Label>
//                                                                 <Input
//                                                                     id="firstName"
//                                                                     value={formData.firstName}
//                                                                     onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
//                                                                     placeholder="Enter first name"
//                                                                     required
//                                                                 />
//                                                             </div>
//                                                             <div>
//                                                                 <Label htmlFor="lastName">Last Name *</Label>
//                                                                 <Input
//                                                                     id="lastName"
//                                                                     value={formData.lastName}
//                                                                     onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
//                                                                     placeholder="Enter last name"
//                                                                     required
//                                                                 />
//                                                             </div>
//                                                         </div>

//                                                         <div>
//                                                             <Label htmlFor="email">Email Address *</Label>
//                                                             <Input
//                                                                 id="email"
//                                                                 type="email"
//                                                                 value={formData.email}
//                                                                 onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
//                                                                 placeholder="Enter email address"
//                                                                 required
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <Label htmlFor="phone">Phone Number</Label>
//                                                             <Input
//                                                                 id="phone"
//                                                                 type="tel"
//                                                                 value={formData.phone}
//                                                                 onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
//                                                                 placeholder="Enter phone number"
//                                                             />
//                                                         </div>

//                                                         <div>
//                                                             <Label htmlFor="specialRequests">Special Requests</Label>
//                                                             <Textarea
//                                                                 id="specialRequests"
//                                                                 value={formData.specialRequests}
//                                                                 onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
//                                                                 placeholder="Any special requests, dietary requirements, or accessibility needs..."
//                                                                 rows={4}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 </CardContent>
//                                             </Card>

//                                             {/* Booking Summary */}
//                                             {(bookingType === 'accommodation' ? (formData.roomType && checkInDate && checkOutDate) : formData.diningDate) && (
//                                                 <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
//                                                     <CardContent className="p-6">
//                                                         <h3 className="text-xl font-semibold mb-6 text-gray-800">Booking Summary</h3>

//                                                         <div className="space-y-3">
//                                                             {bookingType === 'accommodation' && formData.roomType && (
//                                                                 <>
//                                                                     <div className="flex justify-between items-center">
//                                                                         <span className="text-gray-600">Room:</span>
//                                                                         <span className="font-medium">{roomTypes.find(r => r.value === formData.roomType)?.label}</span>
//                                                                     </div>
//                                                                     {checkInDate && checkOutDate && (
//                                                                         <>
//                                                                             <div className="flex justify-between items-center">
//                                                                                 <span className="text-gray-600">Check-in:</span>
//                                                                                 <span className="font-medium">{formatDate(checkInDate)}</span>
//                                                                             </div>
//                                                                             <div className="flex justify-between items-center">
//                                                                                 <span className="text-gray-600">Check-out:</span>
//                                                                                 <span className="font-medium">{formatDate(checkOutDate)}</span>
//                                                                             </div>
//                                                                             <div className="flex justify-between items-center">
//                                                                                 <span className="text-gray-600">Nights:</span>
//                                                                                 <span className="font-medium">{calculateNights()}</span>
//                                                                             </div>
//                                                                         </>
//                                                                     )}
//                                                                     <div className="flex justify-between items-center">
//                                                                         <span className="text-gray-600">Guests:</span>
//                                                                         <span className="font-medium">
//                                                                             {formData.adults} Adult{formData.adults !== '1' ? 's' : ''}
//                                                                             {parseInt(formData.children) > 0 && `, ${formData.children} Child${formData.children !== '1' ? 'ren' : ''}`}
//                                                                         </span>
//                                                                     </div>
//                                                                 </>
//                                                             )}

//                                                             {bookingType === 'dining' && formData.diningDate && (
//                                                                 <>
//                                                                     <div className="flex justify-between items-center">
//                                                                         <span className="text-gray-600">Date:</span>
//                                                                         <span className="font-medium">{formatDate(formData.diningDate)}</span>
//                                                                     </div>
//                                                                     <div className="flex justify-between items-center">
//                                                                         <span className="text-gray-600">Guests:</span>
//                                                                         <span className="font-medium">{formData.diningGuests} Guest{formData.diningGuests !== '1' ? 's' : ''}</span>
//                                                                     </div>
//                                                                 </>
//                                                             )}

//                                                             {/* Selected dining options */}
//                                                             {(formData.diningBreakfast || formData.diningLunch || formData.diningDinner) && (
//                                                                 <div className="border-t pt-3 mt-3">
//                                                                     <span className="text-gray-600 block mb-2">Selected Meals:</span>
//                                                                     {formData.diningBreakfast && <div className="text-sm">• Breakfast</div>}
//                                                                     {formData.diningLunch && <div className="text-sm">• Lunch</div>}
//                                                                     {formData.diningDinner && <div className="text-sm">• Dinner</div>}
//                                                                 </div>
//                                                             )}

//                                                             {formData.airportTransfer && (
//                                                                 <div className="text-sm text-gray-600">• Airport Transfer Included</div>
//                                                             )}

//                                                             <div className="border-t pt-3 mt-4">
//                                                                 <div className="flex justify-between items-center text-lg font-bold text-gray-900">
//                                                                     <span>Estimated Total:</span>
//                                                                     <span className="text-green-600">R{calculateTotal().toLocaleString()}</span>
//                                                                 </div>
//                                                                 <p className="text-xs text-gray-500 mt-2">
//                                                                     *Final price will be confirmed upon booking review
//                                                                 </p>
//                                                             </div>
//                                                         </div>
//                                                     </CardContent>
//                                                 </Card>
//                                             )}
//                                         </div>
//                                     </div>

//                                     {/* Submit Button */}
//                                     <div className="flex justify-end space-x-4 pt-6 border-t">
//                                         <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="px-8 py-3">
//                                             Cancel
//                                         </Button>
//                                         <Button
//                                             type="submit"
//                                             className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 text-lg"
//                                             disabled={!formData.firstName || !formData.lastName || !formData.email}
//                                         >
//                                             Review Booking
//                                         </Button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </DialogContent>
//                     </Dialog>

//                     {/* Confirmation Dialog */}
//                     <Dialog open={showConfirmation} onOpenChange={handleClose}>
//                         <DialogContent>
//                             <DialogHeader>
//                                 <DialogTitle className="text-green-600 flex items-center gap-3">
//                                     <Check size={28} />
//                                     Confirm Your Booking
//                                 </DialogTitle>
//                             </DialogHeader>

//                             <div className="px-8 pb-8">
//                                 <div className="space-y-6">
//                                     <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
//                                         <CardContent className="p-6">
//                                             <h3 className="text-lg font-semibold mb-4">Booking Details</h3>

//                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                                 <div className="space-y-3">
//                                                     <h4 className="font-medium text-gray-800">Contact Information</h4>
//                                                     <div className="text-sm space-y-1">
//                                                         <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
//                                                         <p><span className="font-medium">Email:</span> {formData.email}</p>
//                                                         {formData.phone && <p><span className="font-medium">Phone:</span> {formData.phone}</p>}
//                                                     </div>
//                                                 </div>

//                                                 <div className="space-y-3">
//                                                     <h4 className="font-medium text-gray-800">{bookingType === 'accommodation' ? 'Stay Details' : 'Dining Details'}</h4>
//                                                     <div className="text-sm space-y-1">
//                                                         {bookingType === 'accommodation' ? (
//                                                             <>
//                                                                 <p><span className="font-medium">Room:</span> {roomTypes.find(r => r.value === formData.roomType)?.label}</p>
//                                                                 <p><span className="font-medium">Dates:</span> {formatDate(checkInDate)} - {formatDate(checkOutDate)}</p>
//                                                                 <p><span className="font-medium">Nights:</span> {calculateNights()}</p>
//                                                                 <p><span className="font-medium">Guests:</span> {formData.adults} Adults{parseInt(formData.children) > 0 ? `, ${formData.children} Children` : ''}</p>
//                                                             </>
//                                                         ) : (
//                                                             <>
//                                                                 <p><span className="font-medium">Date:</span> {formatDate(formData.diningDate)}</p>
//                                                                 <p><span className="font-medium">Guests:</span> {formData.diningGuests}</p>
//                                                             </>
//                                                         )}
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             {(formData.diningBreakfast || formData.diningLunch || formData.diningDinner || formData.airportTransfer) && (
//                                                 <div className="mt-4 pt-4 border-t">
//                                                     <h4 className="font-medium text-gray-800 mb-2">Additional Services</h4>
//                                                     <div className="text-sm space-y-1">
//                                                         {formData.diningBreakfast && <p>• Breakfast included</p>}
//                                                         {formData.diningLunch && <p>• Lunch included</p>}
//                                                         {formData.diningDinner && <p>• Dinner included</p>}
//                                                         {formData.airportTransfer && <p>• Airport transfer included</p>}
//                                                     </div>
//                                                 </div>
//                                             )}

//                                             {formData.specialRequests && (
//                                                 <div className="mt-4 pt-4 border-t">
//                                                     <h4 className="font-medium text-gray-800 mb-2">Special Requests</h4>
//                                                     <p className="text-sm text-gray-600">{formData.specialRequests}</p>
//                                                 </div>
//                                             )}

//                                             <div className="mt-6 pt-4 border-t">
//                                                 <div className="flex justify-between items-center text-xl font-bold">
//                                                     <span>Total Amount:</span>
//                                                     <span className="text-green-600">R{calculateTotal().toLocaleString()}</span>
//                                                 </div>
//                                             </div>
//                                         </CardContent>
//                                     </Card>

//                                     <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//                                         <div className="flex items-start gap-3">
//                                             <div className="text-yellow-600 mt-1">⚠️</div>
//                                             <div className="text-sm text-yellow-800">
//                                                 <p className="font-medium mb-1">Important Notes:</p>
//                                                 <ul className="list-disc list-inside space-y-1">
//                                                     <li>A confirmation email will be sent to {formData.email}</li>
//                                                     <li>Payment will be processed upon arrival or as per our payment terms</li>
//                                                     <li>Cancellation policy applies as per our terms and conditions</li>
//                                                     <li>All prices are in South African Rand (ZAR)</li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="flex justify-end space-x-4">
//                                         <Button
//                                             type="button"
//                                             variant="outline"
//                                             onClick={() => setShowConfirmation(false)}
//                                             className="px-6 py-3"
//                                         >
//                                             <X size={16} />
//                                             Back to Edit
//                                         </Button>
//                                         <Button
//                                             onClick={handleConfirmBooking}
//                                             variant="success"
//                                             className="px-8 py-3 text-lg"
//                                         >
//                                             <Check size={16} />
//                                             Confirm Booking
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </DialogContent>
//                     </Dialog>

//                 </div>
//             )}
//         </>
//     );
// }



import { useState } from 'react';
import { Users, Utensils, MapPin, Phone, Mail, User } from 'lucide-react';

interface BookingFormProps {
  children: React.ReactNode;
}

export default function BookingForm({ children }: BookingFormProps = { children: null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    roomType: '',
    adults: '2',
    children: '0',
    childrenAges: [] as string[],
    checkInDate: '',
    checkOutDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    diningBreakfast: false,
    diningLunch: false,
    diningDinner: false,
    specialRequests: '',
    airportTransfer: false
  });

  const roomTypes = [
    { value: 'standard', label: 'Standard Sea View Room - From R850/night', price: 850 },
    { value: 'family', label: 'Family Room - From R1200/night', price: 1200 },
    { value: 'premium', label: 'Premium Beachfront Suite - From R1650/night', price: 1650 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submission:', formData);
    alert('Booking request submitted! We will contact you soon to confirm your reservation.');
    setIsOpen(false);
  };

  const handleChildrenChange = (value: string) => {
    const numChildren = parseInt(value);
    setFormData(prev => ({
      ...prev,
      children: value,
      childrenAges: Array(numChildren).fill('')
    }));
  };

  const handleChildAgeChange = (index: number, age: string) => {
    const newAges = [...formData.childrenAges];
    newAges[index] = age;
    setFormData(prev => ({ ...prev, childrenAges: newAges }));
  };

  const calculateNights = () => {
    if (formData.checkInDate && formData.checkOutDate) {
      const checkIn = new Date(formData.checkInDate);
      const checkOut = new Date(formData.checkOutDate);
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateEstimatedTotal = () => {
    const selectedRoom = roomTypes.find(room => room.value === formData.roomType);
    if (selectedRoom && formData.checkInDate && formData.checkOutDate) {
      const nights = calculateNights();
      let total = selectedRoom.price * nights;
      
      const totalGuests = parseInt(formData.adults) + parseInt(formData.children);
      if (formData.diningBreakfast) total += 150 * totalGuests * nights;
      if (formData.diningLunch) total += 200 * totalGuests * nights;
      if (formData.diningDinner) total += 300 * totalGuests * nights;
      
      if (formData.airportTransfer) total += 800;
      
      return total;
    }
    return 0;
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };


  if (!isOpen) {
    return (
      <div onClick={() => setIsOpen(true)}>
        {children}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden mx-auto my-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-light">Book Your Stay</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 text-2xl font-light"
            >
              ×
            </button>
          </div>
          <p className="text-slate-300 mt-1 font-light">Complete your reservation details below</p>
        </div>

        <div className="overflow-y-auto max-h-[calc(95vh-120px)]">
          <div onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Stay Details */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-slate-700 rounded-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-800">Stay Details</h3>
                  </div>
                  
                  {/* Room Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Room Type</label>
                    <select 
                      value={formData.roomType} 
                      onChange={(e) => setFormData(prev => ({ ...prev, roomType: e.target.value }))}
                      className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select room type</option>
                      {roomTypes.map((room) => (
                        <option key={room.value} value={room.value}>
                          {room.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Check-in</label>
                      <input
                        type="date"
                        value={formData.checkInDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, checkInDate: e.target.value }))}
                        min={getTomorrowDate()}
                        className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Check-out</label>
                      <input
                        type="date"
                        value={formData.checkOutDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, checkOutDate: e.target.value }))}
                        min={formData.checkInDate || getTomorrowDate()}
                        className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Adults</label>
                      <select 
                        value={formData.adults} 
                        onChange={(e) => setFormData(prev => ({ ...prev, adults: e.target.value }))}
                        className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Adult' : 'Adults'}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Children</label>
                      <select 
                        value={formData.children} 
                        onChange={(e) => handleChildrenChange(e.target.value)}
                        className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                      >
                        {[0, 1, 2, 3, 4].map((num) => (
                          <option key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Child' : 'Children'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Children Ages */}
                  {parseInt(formData.children) > 0 && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Children's Ages</label>
                      <div className="grid grid-cols-2 gap-2">
                        {formData.childrenAges.map((age, index) => (
                          <select 
                            key={index} 
                            value={age} 
                            onChange={(e) => handleChildAgeChange(index, e.target.value)}
                            className="p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-sm"
                          >
                            <option value="">Child {index + 1} age</option>
                            {Array.from({ length: 17 }, (_, i) => (
                              <option key={i} value={i.toString()}>
                                {i} {i === 1 ? 'year' : 'years'} old
                              </option>
                            ))}
                          </select>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Dining & Services */}
                <div className="bg-slate-50 rounded-xl p-6 mt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-slate-700 rounded-lg">
                      <Utensils className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-800">Services</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { key: 'diningBreakfast', label: 'Breakfast', price: 'R150 per person per day' },
                      { key: 'diningLunch', label: 'Lunch', price: 'R200 per person per day' },
                      { key: 'diningDinner', label: 'Dinner', price: 'R300 per person per day' },
                      { key: 'airportTransfer', label: 'Airport Transfer', price: 'R800 return from King Shaka' }
                    ].map((service) => (
                      <label key={service.key} className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData[service.key as keyof typeof formData] as boolean}
                          onChange={(e) => setFormData(prev => ({ ...prev, [service.key]: e.target.checked }))}
                          className="mt-1 w-4 h-4 text-slate-600 border-slate-300 rounded focus:ring-slate-500"
                        />
                        <div className="text-sm">
                          <div className="font-medium text-slate-800 group-hover:text-slate-600 transition-colors">
                            {service.label}
                          </div>
                          <div className="text-slate-500">{service.price}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-slate-700 rounded-lg">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-800">Contact Information</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                        <input 
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          placeholder="Enter first name"
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                        <input 
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          placeholder="Enter last name"
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="Enter email address"
                          className="w-full p-3 pl-11 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="Enter phone number"
                          className="w-full p-3 pl-11 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Special Requests</label>
                      <textarea 
                        value={formData.specialRequests}
                        onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                        placeholder="Any special requests or dietary requirements..."
                        rows={4}
                        className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="lg:col-span-1">
                {formData.roomType && formData.checkInDate && formData.checkOutDate && (
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-xl p-6 sticky top-0">
                    <h3 className="text-lg font-medium mb-4">Booking Summary</h3>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center py-2 border-b border-slate-600">
                        <span className="text-slate-300">Room</span>
                        <span className="font-medium text-right">
                          {roomTypes.find(r => r.value === formData.roomType)?.label.split(' - ')[0]}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-slate-600">
                        <span className="text-slate-300">Check-in</span>
                        <span className="font-medium">{formatDate(formData.checkInDate)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-slate-600">
                        <span className="text-slate-300">Check-out</span>
                        <span className="font-medium">{formatDate(formData.checkOutDate)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-slate-600">
                        <span className="text-slate-300">Duration</span>
                        <span className="font-medium">{calculateNights()} nights</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-slate-600">
                        <span className="text-slate-300">Guests</span>
                        <span className="font-medium">
                          {formData.adults} Adults{parseInt(formData.children) > 0 ? `, ${formData.children} Children` : ''}
                        </span>
                      </div>
                      
                      {calculateEstimatedTotal() > 0 && (
                        <>
                          <div className="pt-4 mt-4 border-t border-slate-600">
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-medium">Estimated Total</span>
                              <span className="text-2xl font-bold text-white">
                                R{calculateEstimatedTotal().toLocaleString()}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                            This is an estimate. Final price will be confirmed upon booking review.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-slate-200">
              <button 
                type="button" 
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button 
                type="submit"
                onClick={handleSubmit}
                className="px-8 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium"
              >
                Submit Booking Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}