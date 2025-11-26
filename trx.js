// Product Database
const products = {
    'r9-motorcycle': {
        name: 'Yamaha R9',
        price: 890000,
        category: 'motorcycles',
        image: 'https://source.unsplash.com/600x400/?yamaha,motorcycle,philippines',
        specs: {
            engine: '890cc Liquid-cooled, 4-stroke, DOHC, 4-valve, 3-cylinder',
            power: '119 HP @ 10,000 RPM',
            torque: '93 Nm @ 7,000 RPM',
            transmission: '6-speed with Assist & Slipper Clutch',
            fuelCapacity: '14 liters',
            weight: '190 kg',
            brakes: 'Dual 298mm front discs, 245mm rear disc',
            tires: '120/70ZR17 front, 180/55ZR17 rear',
            releaseYear: '2023',
            origin: 'Philippines',
            material: 'Aluminum Deltabox frame with magnesium subframe',
            topSpeed: '240 km/h',
            acceleration: '0-100 km/h in 3.3 seconds',
            fuelConsumption: '20 km/liter',
            seatHeight: '835 mm',
            wheelbase: '1430 mm'
        },
        description: 'The Yamaha R9 is the ultimate supersport motorcycle designed for the Philippine market. Featuring cutting-edge technology and race-inspired engineering.'
    },
    'honda-cbr': {
        name: 'Honda CBR1000RR',
        price: 1250000,
        category: 'motorcycles',
        image: 'https://source.unsplash.com/600x400/?honda,cbr,motorcycle',
        specs: {
            engine: '999cc Liquid-cooled, 4-stroke, DOHC, 16-valve, Inline-4',
            power: '189 HP @ 13,000 RPM',
            torque: '114 Nm @ 11,000 RPM',
            transmission: '6-speed with Quickshifter',
            fuelCapacity: '16 liters',
            weight: '201 kg',
            brakes: 'Dual 320mm front discs, 220mm rear disc',
            tires: '120/70ZR17 front, 190/50ZR17 rear',
            releaseYear: '2023',
            origin: 'Japan',
            material: 'Aluminum twin-spar frame',
            topSpeed: '299 km/h',
            acceleration: '0-100 km/h in 2.6 seconds',
            fuelConsumption: '18 km/liter',
            seatHeight: '832 mm',
            wheelbase: '1455 mm'
        },
        description: 'The legendary Honda CBR1000RR represents the pinnacle of Honda racing technology.'
    },
    'ducati-panigale': {
        name: 'Ducati Panigale V4',
        price: 1850000,
        category: 'motorcycles',
        image: 'https://source.unsplash.com/600x400/?ducati,panigale,motorcycle',
        specs: {
            engine: '1103cc Desmosedici Stradale 90° V4, liquid-cooled',
            power: '214 HP @ 13,000 RPM',
            torque: '124 Nm @ 10,000 RPM',
            transmission: '6-speed with Ducati Quick Shift',
            fuelCapacity: '16 liters',
            weight: '198 kg',
            brakes: 'Dual 330mm front discs, 245mm rear disc',
            tires: '120/70ZR17 front, 200/60ZR17 rear',
            releaseYear: '2023',
            origin: 'Italy',
            material: 'Aluminum monocoque frame',
            topSpeed: '300+ km/h',
            acceleration: '0-100 km/h in 2.4 seconds',
            fuelConsumption: '16 km/liter',
            seatHeight: '845 mm',
            wheelbase: '1469 mm'
        },
        description: 'The Ducati Panigale V4 is the closest thing to a MotoGP bike for the road.'
    },
    'kawasaki-ninja': {
        name: 'Kawasaki Ninja H2',
        price: 1450000,
        category: 'motorcycles',
        image: 'https://source.unsplash.com/600x400/?kawasaki,ninja,motorcycle',
        specs: {
            engine: '998cc Supercharged, liquid-cooled, 4-stroke, DOHC, 4-valve, Inline-4',
            power: '200 HP @ 11,000 RPM',
            torque: '133.5 Nm @ 10,500 RPM',
            transmission: '6-speed with Quickshifter',
            fuelCapacity: '17 liters',
            weight: '238 kg',
            brakes: 'Dual 330mm front discs, 250mm rear disc',
            tires: '120/70ZR17 front, 200/55ZR17 rear',
            releaseYear: '2023',
            origin: 'Japan',
            material: 'Steel trellis frame',
            topSpeed: '299 km/h',
            acceleration: '0-100 km/h in 2.6 seconds',
            fuelConsumption: '17 km/liter',
            seatHeight: '825 mm',
            wheelbase: '1455 mm'
        },
        description: 'The Kawasaki Ninja H2 features a supercharged engine for ultimate performance.'
    },
    'bmw-s1000': {
        name: 'BMW S1000RR',
        price: 1650000,
        category: 'motorcycles',
        image: 'https://source.unsplash.com/600x400/?bmw,s1000rr,motorcycle',
        specs: {
            engine: '999cc Liquid-cooled, 4-stroke, DOHC, 16-valve, Inline-4',
            power: '207 HP @ 13,500 RPM',
            torque: '113 Nm @ 11,000 RPM',
            transmission: '6-speed with ShiftCam',
            fuelCapacity: '16.5 liters',
            weight: '197 kg',
            brakes: 'Dual 320mm front discs, 220mm rear disc',
            tires: '120/70ZR17 front, 190/55ZR17 rear',
            releaseYear: '2023',
            origin: 'Germany',
            material: 'Aluminum bridge frame',
            topSpeed: '299 km/h',
            acceleration: '0-100 km/h in 2.6 seconds',
            fuelConsumption: '19 km/liter',
            seatHeight: '824 mm',
            wheelbase: '1440 mm'
        },
        description: 'The BMW S1000RR combines German engineering excellence with racing performance.'
    },
    'toyota-supra': {
        name: 'Toyota Supra GR',
        price: 5250000,
        category: 'cars',
        image: 'https://source.unsplash.com/600x400/?toyota,supra,car',
        specs: {
            engine: '3.0L Twin-Scroll Turbocharged Inline-6',
            power: '382 HP @ 5,800 RPM',
            torque: '500 Nm @ 1,800 RPM',
            transmission: '8-speed Automatic with Paddle Shifters',
            fuelCapacity: '52 liters',
            weight: '1,570 kg',
            drivetrain: 'Rear-Wheel Drive',
            seating: '2-seater',
            releaseYear: '2023',
            origin: 'Japan',
            material: 'Aluminum and steel composite body',
            topSpeed: '250 km/h (electronically limited)',
            acceleration: '0-100 km/h in 3.9 seconds',
            fuelConsumption: '12 km/liter',
            length: '4,380 mm',
            width: '1,865 mm',
            height: '1,295 mm'
        },
        description: 'The legendary Toyota Supra returns with modern performance and classic styling.'
    },
    'honda-civic': {
        name: 'Honda Civic Type R',
        price: 3450000,
        category: 'cars',
        image: 'https://source.unsplash.com/600x400/?honda,civic,type-r',
        specs: {
            engine: '2.0L Turbocharged VTEC Inline-4',
            power: '315 HP @ 6,500 RPM',
            torque: '420 Nm @ 2,500 RPM',
            transmission: '6-speed Manual',
            fuelCapacity: '47 liters',
            weight: '1,429 kg',
            drivetrain: 'Front-Wheel Drive',
            seating: '5-seater',
            releaseYear: '2023',
            origin: 'Japan',
            material: 'Steel unibody with aluminum hood',
            topSpeed: '270 km/h',
            acceleration: '0-100 km/h in 5.4 seconds',
            fuelConsumption: '14 km/liter',
            length: '4,595 mm',
            width: '1,890 mm',
            height: '1,405 mm'
        },
        description: 'The Honda Civic Type R is the ultimate hot hatch for enthusiasts.'
    },
    'nissan-gtr': {
        name: 'Nissan GT-R R35',
        price: 8950000,
        category: 'cars',
        image: 'https://source.unsplash.com/600x400/?nissan,gt-r,car',
        specs: {
            engine: '3.8L Twin-Turbocharged V6',
            power: '565 HP @ 6,800 RPM',
            torque: '633 Nm @ 3,300 RPM',
            transmission: '6-speed Dual-Clutch Automatic',
            fuelCapacity: '74 liters',
            weight: '1,752 kg',
            drivetrain: 'All-Wheel Drive',
            seating: '4-seater',
            releaseYear: '2023',
            origin: 'Japan',
            material: 'Aluminum and carbon fiber body',
            topSpeed: '315 km/h',
            acceleration: '0-100 km/h in 2.7 seconds',
            fuelConsumption: '8 km/liter',
            length: '4,710 mm',
            width: '1,895 mm',
            height: '1,370 mm'
        },
        description: 'The Nissan GT-R is a technological marvel known as "Godzilla".'
    },
    'mazda-rx7': {
        name: 'Mazda RX-7 FD',
        price: 4850000,
        category: 'cars',
        image: 'https://source.unsplash.com/600x400/?mazda,rx7,car',
        specs: {
            engine: '1.3L Twin-Rotary (13B-REW) Twin-Turbocharged',
            power: '276 HP @ 6,500 RPM',
            torque: '314 Nm @ 5,000 RPM',
            transmission: '5-speed Manual',
            fuelCapacity: '76 liters',
            weight: '1,280 kg',
            drivetrain: 'Rear-Wheel Drive',
            seating: '4-seater',
            releaseYear: '2002',
            origin: 'Japan',
            material: 'Steel chassis with aluminum panels',
            topSpeed: '250 km/h',
            acceleration: '0-100 km/h in 5.1 seconds',
            fuelConsumption: '10 km/liter',
            length: '4,285 mm',
            width: '1,760 mm',
            height: '1,230 mm'
        },
        description: 'The Mazda RX-7 FD is a legendary rotary-powered sports car.'
    },
    'subaru-wrx': {
        name: 'Subaru WRX STI',
        price: 3850000,
        category: 'cars',
        image: 'https://source.unsplash.com/600x400/?subaru,wrx,car',
        specs: {
            engine: '2.5L Turbocharged Boxer-4',
            power: '310 HP @ 6,000 RPM',
            torque: '407 Nm @ 4,000 RPM',
            transmission: '6-speed Manual',
            fuelCapacity: '60 liters',
            weight: '1,570 kg',
            drivetrain: 'All-Wheel Drive',
            seating: '5-seater',
            releaseYear: '2023',
            origin: 'Japan',
            material: 'Steel unibody with aluminum hood',
            topSpeed: '255 km/h',
            acceleration: '0-100 km/h in 4.9 seconds',
            fuelConsumption: '11 km/liter',
            length: '4,595 mm',
            width: '1,795 mm',
            height: '1,475 mm'
        },
        description: 'The Subaru WRX STI is a rally-bred performance sedan.'
    },
    'john-deere-tractor': {
        name: 'John Deere 6120B',
        price: 2850000,
        category: 'farm',
        image: 'https://source.unsplash.com/600x400/?john-deere,tractor,farm',
        specs: {
            engine: '4.5L 4-cylinder Turbocharged Diesel',
            power: '120 HP @ 2,100 RPM',
            torque: '475 Nm @ 1,400 RPM',
            transmission: '12-speed PowerShift',
            fuelCapacity: '200 liters',
            weight: '4,500 kg',
            hydraulicSystem: 'Open center, 80 L/min',
            ptoPower: '100 HP',
            releaseYear: '2023',
            origin: 'USA',
            material: 'Steel frame and body',
            maxSpeed: '40 km/h',
            operatingWidth: '2.5 meters',
            liftCapacity: '4,500 kg',
            tires: '14.9-28 front, 18.4-38 rear'
        },
        description: 'The John Deere 6120B is a powerful and reliable farm tractor.'
    },
    'kubota-tractor': {
        name: 'Kubota L5018',
        price: 1950000,
        category: 'farm',
        image: 'https://source.unsplash.com/600x400/?kubota,tractor,farm',
        specs: {
            engine: '2.4L 4-cylinder Diesel',
            power: '50 HP @ 2,600 RPM',
            torque: '185 Nm @ 1,600 RPM',
            transmission: '8-speed Manual',
            fuelCapacity: '50 liters',
            weight: '2,100 kg',
            hydraulicSystem: 'Open center, 42 L/min',
            ptoPower: '42 HP',
            releaseYear: '2023',
            origin: 'Japan',
            material: 'Steel frame and body',
            maxSpeed: '25 km/h',
            operatingWidth: '1.8 meters',
            liftCapacity: '1,800 kg',
            tires: '8-16 front, 12.4-24 rear'
        },
        description: 'The Kubota L5018 is a compact and efficient farm tractor.'
    },
    'farm-truck': {
        name: 'Isuzu D-Max Farm Edition',
        price: 1450000,
        category: 'farm',
        image: 'https://source.unsplash.com/600x400/?farm,truck,pickup',
        specs: {
            engine: '3.0L Turbocharged Diesel',
            power: '190 HP @ 3,600 RPM',
            torque: '450 Nm @ 1,800 RPM',
            transmission: '6-speed Automatic',
            fuelCapacity: '76 liters',
            weight: '2,100 kg',
            payload: '1,100 kg',
            towingCapacity: '3,500 kg',
            releaseYear: '2023',
            origin: 'Japan',
            material: 'Steel ladder frame',
            topSpeed: '180 km/h',
            acceleration: '0-100 km/h in 10.2 seconds',
            fuelConsumption: '8 km/liter',
            length: '5,295 mm',
            width: '1,860 mm',
            height: '1,795 mm'
        },
        description: 'The Isuzu D-Max Farm Edition is built tough for agricultural work.'
    },
    'rice-transplanter': {
        name: 'Kubota Rice Transplanter',
        price: 850000,
        category: 'farm',
        image: 'https://source.unsplash.com/600x400/?rice,transplanter,farm',
        specs: {
            engine: '0.9L 2-cylinder Diesel',
            power: '20 HP @ 3,200 RPM',
            plantingCapacity: '6 rows',
            plantingWidth: '1.8 meters',
            plantingSpeed: '0-1.5 m/s',
            fuelCapacity: '15 liters',
            weight: '650 kg',
            efficiency: '0.5 hectares per hour',
            releaseYear: '2023',
            origin: 'Japan',
            material: 'Steel frame with plastic components',
            rowSpacing: '300 mm',
            plantSpacing: '120-200 mm adjustable',
            operator: '1 person'
        },
        description: 'Efficient rice transplanter for modern farming operations.'
    },
    'carabao-cart': {
        name: 'Carabao with Wooden Cart',
        price: 95000,
        category: 'farm',
        image: 'https://source.unsplash.com/600x400/?carabao,wooden-cart,philippines',
        specs: {
            animal: 'Philippine Carabao (Bubalus bubalis carabanesis)',
            age: '3-5 years old',
            weight: '400-500 kg',
            cartMaterial: 'Hardwood (Molave or Narra) with steel reinforcements',
            cartCapacity: '800-1,000 kg',
            cartDimensions: '2.5m x 1.2m x 0.4m',
            training: 'Well-trained for farm work',
            health: 'Vaccinated and dewormed',
            origin: 'Philippines',
            maintenance: 'Low maintenance, grass-fed',
            lifespan: '15-20 years',
            uses: 'Plowing, transportation, milk production',
            temperament: 'Gentle and hardworking'
        },
        description: 'Traditional Filipino farm animal with handcrafted wooden cart - perfect for small farms and eco-friendly transportation.'
    }
};

// Shopping Cart
let cart = [];
let orders = [];

// DOM Elements
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const productModal = document.getElementById('productModal');
const checkoutModal = document.getElementById('checkoutModal');
const ordersModal = document.getElementById('ordersModal');
const myOrdersBtn = document.getElementById('myOrdersBtn');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateCartCount();
    loadOrders();
});

// Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn, .category-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            showCategory(category);
            
            // Update active states
            document.querySelectorAll('.nav-btn, .category-item').forEach(b => b.classList.remove('active'));
            document.querySelectorAll(`[data-category="${category}"]`).forEach(b => b.classList.add('active'));
        });
    });

    // Product view buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-view')) {
            const productCard = e.target.closest('.product-card');
            const productId = productCard.dataset.id;
            showProductDetail(productId);
        }
        
        if (e.target.classList.contains('btn-add-cart')) {
            const productCard = e.target.closest('.product-card');
            const productId = productCard.dataset.id;
            addToCart(productId);
        }
    });

    // Cart button
    cartBtn.addEventListener('click', showCart);

    // My Orders button
    myOrdersBtn.addEventListener('click', showOrders);

    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', showCheckout);
    document.getElementById('checkoutForm').addEventListener('submit', processOrder);

    // Click outside modal to close
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Show Category
function showCategory(category) {
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.remove('active');
    });
    
    if (category === 'all') {
        document.querySelectorAll('.category-section').forEach(section => {
            section.classList.add('active');
        });
    } else {
        document.getElementById(category).classList.add('active');
    }
}

// Show Product Detail
function showProductDetail(productId) {
    const product = products[productId];
    if (!product) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <p class="price">₱${product.price.toLocaleString()}</p>
                <p>${product.description}</p>
                
                <div class="product-specs">
                    <h3>Specifications</h3>
                    <ul>
                        ${Object.entries(product.specs).map(([key, value]) => 
                            `<li><strong>${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> ${value}</li>`
                        ).join('')}
                    </ul>
                </div>
                
                <div class="detail-buttons">
                    <button class="btn-test-drive" onclick="requestTestDrive('${productId}')">
                        <i class="fas fa-car"></i> Request Test Drive
                    </button>
                    <button class="btn-buy" onclick="addToCart('${productId}')">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
}

// Add to Cart
function addToCart(productId) {
    const product = products[productId];
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
    
    // Close product modal if open
    productModal.style.display = 'none';
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Show Cart
function showCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₱${item.price.toLocaleString()} x ${item.quantity}</p>
                </div>
                <div class="cart-item-price">
                    ₱${(item.price * item.quantity).toLocaleString()}
                </div>
                <button class="btn-remove" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString();
    }
    
    cartModal.style.display = 'block';
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    showCart(); // Refresh cart display
}

// Show Checkout
function showCheckout() {
    cartModal.style.display = 'none';
    checkoutModal.style.display = 'block';
}

// Process Order
function processOrder(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const order = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        customer: {
            name: formData.get('name') || e.target.querySelector('input[type="text"]').value,
            phone: formData.get('phone') || e.target.querySelector('input[type="tel"]').value,
            email: formData.get('email') || e.target.querySelector('input[type="email"]').value,
            address: formData.get('address') || e.target.querySelector('textarea').value
        },
        paymentMethod: formData.get('payment') || document.querySelector('input[name="payment"]:checked').value,
        status: 'pending'
    };
    
    orders.push(order);
    saveOrders();
    
    // Clear cart
    cart = [];
    updateCartCount();
    
    // Close modals
    checkoutModal.style.display = 'none';
    
    // Show success message
    alert('Thanks for your order, this is only a demo store');
    
    // Show order confirmation
    showOrderConfirmation(order);
}

// Show Order Confirmation
function showOrderConfirmation(order) {
    alert(`
        Order Confirmed!
        Order ID: #${order.id}
        Total: ₱${order.total.toLocaleString()}
        
        This is a demo store - no actual payment will be processed.
    `);
}

// Request Test Drive
function requestTestDrive(productId) {
    const product = products[productId];
    alert(`
        Test Drive Requested for ${product.name}
        
        Our sales team will contact you within 24 hours to schedule your test drive.
        
        Contact: (02) 8-123-4567
        Email: sales@astrix.ph
    `);
}

// Show Orders
function showOrders() {
    const ordersList = document.getElementById('ordersList');
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p>No orders yet</p>';
    } else {
        ordersList.innerHTML = orders.map(order => `
            <div class="order-item">
                <div class="order-header">
                    <div>
                        <h3>Order #${order.id}</h3>
                        <p>${order.date}</p>
                    </div>
                    <div>
                        <span class="order-status status-${order.status}">${order.status.toUpperCase()}</span>
                        ${order.status === 'pending' ? 
                            `<button class="btn-cancel-order" onclick="cancelOrder(${order.id})">Cancel Order</button>` : ''
                        }
                    </div>
                </div>
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item-detail">
                            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                            <div>
                                <h4>${item.name}</h4>
                                <p>₱${item.price.toLocaleString()} x ${item.quantity}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="order-total">
                    <h3>Total: ₱${order.total.toLocaleString()}</h3>
                    <p>Payment: ${order.paymentMethod.toUpperCase()}</p>
                </div>
            </div>
        `).join('');
    }
    
    ordersModal.style.display = 'block';
}

// Cancel Order
function cancelOrder(orderId) {
    if (confirm('Are you sure you want to cancel this order?')) {
        const order = orders.find(o => o.id === orderId);
        if (order && order.status === 'pending') {
            order.status = 'cancelled';
            saveOrders();
            showOrders(); // Refresh display
            showNotification('Order cancelled successfully');
        }
    }
}

// Save Orders to LocalStorage
function saveOrders() {
    localStorage.setItem('astrixOrders', JSON.stringify(orders));
}

// Load Orders from LocalStorage
function loadOrders() {
    const saved = localStorage.getItem('astrixOrders');
    if (saved) {
        orders = JSON.parse(saved);
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #FFD700, #C0C0C0);
        color: #000;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-weight: bold;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
