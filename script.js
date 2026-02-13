// ===================================
// STATE MANAGEMENT
// ===================================
let currentLang = 'ar';
let cart = [];
let currentProduct = null;
let modalQuantity = 1;
let selectedConfig = {
    size: null,
    extras: [],
    sauce: null,
    notes: ''
};

// ===================================
// MENU DATA
// ===================================
const menuData = {
    shawarma: [
        {
            id: 's1',
            nameEn: 'Chicken Shawarma Plate',
            nameAr: 'صحن شاورما دجاج',
            price: 25,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 5 }
            ],
            extras: [
                { id: 'extra-meat', nameEn: 'Extra Meat', nameAr: 'لحم إضافي', price: 8 },
                { id: 'pickles', nameEn: 'Extra Pickles', nameAr: 'مخلل إضافي', price: 2 },
                { id: 'fries', nameEn: 'French Fries', nameAr: 'بطاطس مقلية', price: 5 }
            ],
            sauces: ['Garlic | ثوم', 'Hot | حار', 'Mixed | مشكل']
        },
        {
            id: 's2',
            nameEn: 'Meat Shawarma Plate',
            nameAr: 'صحن شاورما لحم',
            price: 30,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 6 }
            ],
            extras: [
                { id: 'extra-meat', nameEn: 'Extra Meat', nameAr: 'لحم إضافي', price: 10 },
                { id: 'hummus', nameEn: 'Hummus', nameAr: 'حمص', price: 3 },
                { id: 'fries', nameEn: 'French Fries', nameAr: 'بطاطس مقلية', price: 5 }
            ],
            sauces: ['Tahini | طحينة', 'Hot | حار', 'Mixed | مشكل']
        },
        {
            id: 's3',
            nameEn: 'Chicken Shawarma Sandwich',
            nameAr: 'ساندويش شاورما دجاج',
            price: 15,
            sizes: [
                { id: 'small', nameEn: 'Small', nameAr: 'صغير', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 5 }
            ],
            extras: [
                { id: 'cheese', nameEn: 'Cheese', nameAr: 'جبنة', price: 3 },
                { id: 'pickles', nameEn: 'Extra Pickles', nameAr: 'مخلل إضافي', price: 2 }
            ],
            sauces: ['Garlic | ثوم', 'Hot | حار', 'Mixed | مشكل']
        },
        {
            id: 's4',
            nameEn: 'Meat Shawarma Sandwich',
            nameAr: 'ساندويش شاورما لحم',
            price: 18,
            sizes: [
                { id: 'small', nameEn: 'Small', nameAr: 'صغير', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 5 }
            ],
            extras: [
                { id: 'cheese', nameEn: 'Cheese', nameAr: 'جبنة', price: 3 },
                { id: 'onions', nameEn: 'Grilled Onions', nameAr: 'بصل مشوي', price: 2 }
            ],
            sauces: ['Tahini | طحينة', 'Hot | حار', 'Mixed | مشكل']
        },
        {
            id: 's5',
            nameEn: 'Mixed Shawarma Plate',
            nameAr: 'صحن شاورما مشكل',
            price: 35,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 8 }
            ],
            extras: [
                { id: 'hummus', nameEn: 'Hummus', nameAr: 'حمص', price: 3 },
                { id: 'fries', nameEn: 'French Fries', nameAr: 'بطاطس مقلية', price: 5 }
            ],
            sauces: ['Both | كلاهما', 'Garlic | ثوم', 'Tahini | طحينة']
        }
    ],
    chicken: [
        {
            id: 'c1',
            nameEn: 'Whole Grilled Chicken',
            nameAr: 'دجاج مشوي كامل',
            price: 45,
            sizes: [
                { id: 'whole', nameEn: 'Whole Chicken', nameAr: 'دجاج كامل', price: 0 }
            ],
            extras: [
                { id: 'garlic-paste', nameEn: 'Garlic Paste', nameAr: 'معجون ثوم', price: 5 },
                { id: 'fries', nameEn: 'French Fries', nameAr: 'بطاطس مقلية', price: 8 },
                { id: 'pickles', nameEn: 'Pickles & Vegetables', nameAr: 'مخلل وخضار', price: 5 }
            ],
            sauces: ['Garlic | ثوم', 'Hot | حار', 'BBQ | باربيكيو']
        },
        {
            id: 'c2',
            nameEn: 'Half Grilled Chicken',
            nameAr: 'نصف دجاج مشوي',
            price: 25,
            sizes: [
                { id: 'half', nameEn: 'Half Chicken', nameAr: 'نصف دجاج', price: 0 }
            ],
            extras: [
                { id: 'garlic-paste', nameEn: 'Garlic Paste', nameAr: 'معجون ثوم', price: 3 },
                { id: 'fries', nameEn: 'French Fries', nameAr: 'بطاطس مقلية', price: 5 }
            ],
            sauces: ['Garlic | ثوم', 'Hot | حار', 'BBQ | باربيكيو']
        },
        {
            id: 'c3',
            nameEn: 'Chicken Wings (6 pcs)',
            nameAr: 'أجنحة دجاج (6 قطع)',
            price: 22,
            sizes: [
                { id: '6pcs', nameEn: '6 Pieces', nameAr: '6 قطع', price: 0 },
                { id: '12pcs', nameEn: '12 Pieces', nameAr: '12 قطعة', price: 20 }
            ],
            extras: [
                { id: 'ranch', nameEn: 'Ranch Sauce', nameAr: 'صوص رانش', price: 3 }
            ],
            sauces: ['Buffalo | بافلو', 'BBQ | باربيكيو', 'Honey Mustard | خردل بالعسل']
        },
        {
            id: 'c4',
            nameEn: 'Chicken Breast Meal',
            nameAr: 'وجبة صدر دجاج',
            price: 28,
            sizes: [
                { id: 'single', nameEn: 'Single', nameAr: 'واحدة', price: 0 },
                { id: 'double', nameEn: 'Double', nameAr: 'مضاعف', price: 15 }
            ],
            extras: [
                { id: 'vegetables', nameEn: 'Grilled Vegetables', nameAr: 'خضار مشوية', price: 6 },
                { id: 'rice', nameEn: 'Rice', nameAr: 'أرز', price: 5 }
            ],
            sauces: ['Lemon | ليمون', 'Garlic | ثوم', 'Mushroom | مشروم']
        }
    ],
    pizza: [
        {
            id: 'p1',
            nameEn: 'Margherita Pizza',
            nameAr: 'بيتزا مارغريتا',
            price: 35,
            sizes: [
                { id: 'small', nameEn: 'Small (9")', nameAr: 'صغيرة (9")', price: 0 },
                { id: 'medium', nameEn: 'Medium (12")', nameAr: 'وسط (12")', price: 10 },
                { id: 'large', nameEn: 'Large (15")', nameAr: 'كبيرة (15")', price: 20 }
            ],
            extras: [
                { id: 'extra-cheese', nameEn: 'Extra Cheese', nameAr: 'جبنة إضافية', price: 5 },
                { id: 'olives', nameEn: 'Black Olives', nameAr: 'زيتون أسود', price: 3 }
            ],
            sauces: ['Tomato Base | صلصة طماطم']
        },
        {
            id: 'p2',
            nameEn: 'Pepperoni Pizza',
            nameAr: 'بيتزا ببروني',
            price: 40,
            sizes: [
                { id: 'small', nameEn: 'Small (9")', nameAr: 'صغيرة (9")', price: 0 },
                { id: 'medium', nameEn: 'Medium (12")', nameAr: 'وسط (12")', price: 10 },
                { id: 'large', nameEn: 'Large (15")', nameAr: 'كبيرة (15")', price: 20 }
            ],
            extras: [
                { id: 'extra-pepperoni', nameEn: 'Extra Pepperoni', nameAr: 'ببروني إضافي', price: 8 },
                { id: 'jalapeños', nameEn: 'Jalapeños', nameAr: 'هالابينو', price: 3 }
            ],
            sauces: ['Tomato Base | صلصة طماطم']
        },
        {
            id: 'p3',
            nameEn: 'Chicken BBQ Pizza',
            nameAr: 'بيتزا دجاج باربيكيو',
            price: 45,
            sizes: [
                { id: 'small', nameEn: 'Small (9")', nameAr: 'صغيرة (9")', price: 0 },
                { id: 'medium', nameEn: 'Medium (12")', nameAr: 'وسط (12")', price: 10 },
                { id: 'large', nameEn: 'Large (15")', nameAr: 'كبيرة (15")', price: 20 }
            ],
            extras: [
                { id: 'extra-chicken', nameEn: 'Extra Chicken', nameAr: 'دجاج إضافي', price: 8 },
                { id: 'onions', nameEn: 'Red Onions', nameAr: 'بصل أحمر', price: 2 }
            ],
            sauces: ['BBQ Base | قاعدة باربيكيو']
        },
        {
            id: 'p4',
            nameEn: 'Vegetarian Pizza',
            nameAr: 'بيتزا نباتية',
            price: 38,
            sizes: [
                { id: 'small', nameEn: 'Small (9")', nameAr: 'صغيرة (9")', price: 0 },
                { id: 'medium', nameEn: 'Medium (12")', nameAr: 'وسط (12")', price: 10 },
                { id: 'large', nameEn: 'Large (15")', nameAr: 'كبيرة (15")', price: 20 }
            ],
            extras: [
                { id: 'mushrooms', nameEn: 'Extra Mushrooms', nameAr: 'فطر إضافي', price: 4 },
                { id: 'corn', nameEn: 'Sweet Corn', nameAr: 'ذرة حلوة', price: 3 }
            ],
            sauces: ['Tomato Base | صلصة طماطم', 'Pesto | بيستو']
        },
        {
            id: 'p5',
            nameEn: 'Seafood Pizza',
            nameAr: 'بيتزا مأكولات بحرية',
            price: 50,
            sizes: [
                { id: 'small', nameEn: 'Small (9")', nameAr: 'صغيرة (9")', price: 0 },
                { id: 'medium', nameEn: 'Medium (12")', nameAr: 'وسط (12")', price: 12 },
                { id: 'large', nameEn: 'Large (15")', nameAr: 'كبيرة (15")', price: 25 }
            ],
            extras: [
                { id: 'extra-shrimp', nameEn: 'Extra Shrimp', nameAr: 'جمبري إضافي', price: 12 },
                { id: 'capers', nameEn: 'Capers', nameAr: 'كبر', price: 3 }
            ],
            sauces: ['White Sauce | صلصة بيضاء']
        }
    ],
    appetizers: [
        {
            id: 'a1',
            nameEn: 'Hummus',
            nameAr: 'حمص',
            price: 12,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 5 }
            ],
            extras: [
                { id: 'pine-nuts', nameEn: 'Pine Nuts', nameAr: 'صنوبر', price: 5 },
                { id: 'meat', nameEn: 'With Meat', nameAr: 'باللحم', price: 8 }
            ],
            sauces: []
        },
        {
            id: 'a2',
            nameEn: 'Baba Ghanoush',
            nameAr: 'بابا غنوج',
            price: 12,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 5 }
            ],
            extras: [
                { id: 'pomegranate', nameEn: 'Pomegranate', nameAr: 'رمان', price: 3 }
            ],
            sauces: []
        },
        {
            id: 'a3',
            nameEn: 'Fattoush',
            nameAr: 'فتوش',
            price: 15,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 6 }
            ],
            extras: [
                { id: 'extra-bread', nameEn: 'Extra Bread', nameAr: 'خبز إضافي', price: 2 }
            ],
            sauces: ['Pomegranate Dressing | صلصة رمان', 'Lemon Dressing | صلصة ليمون']
        },
        {
            id: 'a4',
            nameEn: 'Tabbouleh',
            nameAr: 'تبولة',
            price: 15,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 6 }
            ],
            extras: [],
            sauces: []
        },
        {
            id: 'a5',
            nameEn: 'Fried Kibbeh (4 pcs)',
            nameAr: 'كبة مقلية (4 قطع)',
            price: 18,
            sizes: [
                { id: '4pcs', nameEn: '4 Pieces', nameAr: '4 قطع', price: 0 },
                { id: '8pcs', nameEn: '8 Pieces', nameAr: '8 قطع', price: 15 }
            ],
            extras: [],
            sauces: ['Yogurt | لبن', 'Hot Sauce | صلصة حارة']
        },
        {
            id: 'a6',
            nameEn: 'French Fries',
            nameAr: 'بطاطس مقلية',
            price: 10,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 4 }
            ],
            extras: [
                { id: 'cheese', nameEn: 'Cheese Sauce', nameAr: 'صوص جبنة', price: 3 }
            ],
            sauces: ['Ketchup | كاتشب', 'Mayo | مايونيز', 'Both | كلاهما']
        }
    ],
    peda: [
        {
            id: 'pd1',
            nameEn: 'Cheese Peda',
            nameAr: 'فطيرة جبنة',
            price: 12,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'extra-cheese', nameEn: 'Extra Cheese', nameAr: 'جبنة إضافية', price: 3 }
            ],
            sauces: []
        },
        {
            id: 'pd2',
            nameEn: 'Spinach Peda',
            nameAr: 'فطيرة سبانخ',
            price: 10,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'pomegranate', nameEn: 'Pomegranate Molasses', nameAr: 'دبس رمان', price: 2 }
            ],
            sauces: []
        },
        {
            id: 'pd3',
            nameEn: 'Meat Peda',
            nameAr: 'فطيرة لحم',
            price: 15,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'extra-meat', nameEn: 'Extra Meat', nameAr: 'لحم إضافي', price: 5 }
            ],
            sauces: ['Yogurt | لبن', 'Hot Sauce | صلصة حارة']
        },
        {
            id: 'pd4',
            nameEn: 'Mixed Cheese Peda',
            nameAr: 'فطيرة جبنة مشكلة',
            price: 14,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [],
            sauces: []
        },
        {
            id: 'pd5',
            nameEn: 'Zaatar Peda',
            nameAr: 'فطيرة زعتر',
            price: 8,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'extra-zaatar', nameEn: 'Extra Zaatar', nameAr: 'زعتر إضافي', price: 2 }
            ],
            sauces: []
        }
    ],
    sandwiches: [
        {
            id: 'sw1',
            nameEn: 'Falafel Sandwich',
            nameAr: 'ساندويش فلافل',
            price: 10,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'extra-falafel', nameEn: 'Extra Falafel', nameAr: 'فلافل إضافي', price: 3 },
                { id: 'fries-inside', nameEn: 'Fries Inside', nameAr: 'بطاطس بالداخل', price: 3 }
            ],
            sauces: ['Tahini | طحينة', 'Hot | حار']
        },
        {
            id: 'sw2',
            nameEn: 'Halloumi Sandwich',
            nameAr: 'ساندويش حلومي',
            price: 12,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'extra-cheese', nameEn: 'Extra Halloumi', nameAr: 'حلومي إضافي', price: 5 }
            ],
            sauces: []
        },
        {
            id: 'sw3',
            nameEn: 'Sujuk Sandwich',
            nameAr: 'ساندويش سجق',
            price: 14,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'cheese', nameEn: 'Cheese', nameAr: 'جبنة', price: 3 }
            ],
            sauces: ['Garlic | ثوم', 'Hot | حار']
        },
        {
            id: 'sw4',
            nameEn: 'Labneh Sandwich',
            nameAr: 'ساندويش لبنة',
            price: 8,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'olives', nameEn: 'Olives', nameAr: 'زيتون', price: 2 },
                { id: 'mint', nameEn: 'Fresh Mint', nameAr: 'نعناع طازج', price: 1 }
            ],
            sauces: []
        },
        {
            id: 'sw5',
            nameEn: 'Mortadella Sandwich',
            nameAr: 'ساندويش مرتديلا',
            price: 10,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'pickles', nameEn: 'Pickles', nameAr: 'مخلل', price: 2 }
            ],
            sauces: ['Ketchup | كاتشب', 'Mayo | مايونيز']
        }
    ],
    manakish: [
        {
            id: 'm1',
            nameEn: 'Zaatar Manakish',
            nameAr: 'مناقيش زعتر',
            price: 8,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 3 }
            ],
            extras: [
                { id: 'cheese', nameEn: 'Add Cheese', nameAr: 'إضافة جبنة', price: 3 }
            ],
            sauces: []
        },
        {
            id: 'm2',
            nameEn: 'Cheese Manakish',
            nameAr: 'مناقيش جبنة',
            price: 10,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 },
                { id: 'large', nameEn: 'Large', nameAr: 'كبير', price: 4 }
            ],
            extras: [
                { id: 'extra-cheese', nameEn: 'Extra Cheese', nameAr: 'جبنة إضافية', price: 3 }
            ],
            sauces: []
        },
        {
            id: 'm3',
            nameEn: 'Kishk Manakish',
            nameAr: 'مناقيش كشك',
            price: 9,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'onions', nameEn: 'Onions', nameAr: 'بصل', price: 2 }
            ],
            sauces: []
        },
        {
            id: 'm4',
            nameEn: 'Labneh Manakish',
            nameAr: 'مناقيش لبنة',
            price: 10,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [
                { id: 'vegetables', nameEn: 'Vegetables', nameAr: 'خضار', price: 2 }
            ],
            sauces: []
        },
        {
            id: 'm5',
            nameEn: 'Muhammara Manakish',
            nameAr: 'مناقيش محمرة',
            price: 11,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [],
            sauces: []
        },
        {
            id: 'm6',
            nameEn: 'Mixed Manakish',
            nameAr: 'مناقيش مشكلة',
            price: 12,
            sizes: [
                { id: 'regular', nameEn: 'Regular', nameAr: 'عادي', price: 0 }
            ],
            extras: [],
            sauces: []
        }
    ]
};

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadCart();
    renderMenuItems();
    setupEventListeners();
    updateLanguage();
}

// ===================================
// EVENT LISTENERS
// ===================================
function setupEventListeners() {
    // Language toggle
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    
    // Floating Cart button
    document.getElementById('floatingCartButton').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    
    // Hero CTA
    document.getElementById('exploreCta').addEventListener('click', scrollToMenu);
    
    // Menu navigation
    document.querySelectorAll('.menu-nav-item').forEach(item => {
        item.addEventListener('click', (e) => switchMenuCategory(e.target.dataset.category));
    });
    
    // Modal controls
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', closeModal);
    document.getElementById('increaseQty').addEventListener('click', increaseQuantity);
    document.getElementById('decreaseQty').addEventListener('click', decreaseQuantity);
    document.getElementById('addToCartBtn').addEventListener('click', addToCart);
    
    // WhatsApp order button
    document.getElementById('whatsappOrderBtn').addEventListener('click', sendWhatsAppOrder);
}

// ===================================
// LANGUAGE MANAGEMENT
// ===================================
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const html = document.documentElement;
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all elements with language data attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        const text = element.getAttribute(`data-${currentLang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder-en]').forEach(element => {
        const placeholder = element.getAttribute(`data-placeholder-${currentLang}`);
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });
    
    // Re-render menu to update product names
    renderMenuItems();
    updateCartDisplay();
}

// ===================================
// MENU RENDERING
// ===================================
function renderMenuItems() {
    // Render individual categories
    Object.keys(menuData).forEach(category => {
        const grid = document.getElementById(`${category}-grid`);
        if (!grid) return;
        
        grid.innerHTML = '';
        
        menuData[category].forEach((item, index) => {
            const card = createMenuCard(item, index);
            grid.appendChild(card);
        });
    });
    
    // Render "All Menu" section
    const allGrid = document.getElementById('all-grid');
    if (allGrid) {
        allGrid.innerHTML = '';
        Object.keys(menuData).forEach(category => {
            menuData[category].forEach((item, index) => {
                const card = createMenuCard(item, index);
                allGrid.appendChild(card);
            });
        });
    }
}

function createMenuCard(item, index) {
    const card = document.createElement('div');
    card.className = 'menu-item';
    
    const name = currentLang === 'en' ? item.nameEn : item.nameAr;
    
    card.innerHTML = `
        <div class="menu-item-image">
            <!-- ADD PRODUCT IMAGE: images/products/${item.id}.jpg -->
            📷 Image Placeholder
        </div>
        <div class="menu-item-content">
            <div class="menu-item-header">
                <div class="menu-item-name">
                    <span class="menu-item-name-en">${item.nameEn}</span>
                    <span class="menu-item-name-ar">${item.nameAr}</span>
                </div>
                <div class="menu-item-price">${item.price} AED</div>
            </div>
            <button class="menu-item-btn">
                <span data-en="Select" data-ar="اختر">${currentLang === 'en' ? 'Select' : 'اختر'}</span>
            </button>
        </div>
    `;
    
    card.querySelector('.menu-item-btn').addEventListener('click', () => openProductModal(item));
    
    return card;
}

function switchMenuCategory(category) {
    // Update navigation
    document.querySelectorAll('.menu-nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.category === category);
    });
    
    // Update sections
    document.querySelectorAll('.menu-section').forEach(section => {
        section.classList.toggle('active', section.dataset.category === category);
    });
}

function scrollToMenu() {
    document.getElementById('menuMain').scrollIntoView({ behavior: 'smooth' });
}

// ===================================
// MODAL MANAGEMENT
// ===================================
function openProductModal(product) {
    currentProduct = product;
    modalQuantity = 1;
    selectedConfig = {
        size: product.sizes[0]?.id || null,
        extras: [],
        sauce: product.sauces[0]?.split(' | ')[0] || null,
        notes: ''
    };
    
    const modal = document.getElementById('productModal');
    const name = currentLang === 'en' ? product.nameEn : product.nameAr;
    
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalPrice').textContent = `${product.price} AED`;
    document.getElementById('quantityValue').textContent = modalQuantity;
    
    // Render size options
    if (product.sizes && product.sizes.length > 0) {
        document.getElementById('sizeSection').style.display = 'block';
        renderSizeOptions(product.sizes);
    } else {
        document.getElementById('sizeSection').style.display = 'none';
    }
    
    // Render extras
    if (product.extras && product.extras.length > 0) {
        document.getElementById('extrasSection').style.display = 'block';
        renderExtrasOptions(product.extras);
    } else {
        document.getElementById('extrasSection').style.display = 'none';
    }
    
    // Render sauces
    if (product.sauces && product.sauces.length > 0) {
        document.getElementById('sauceSection').style.display = 'block';
        renderSauceOptions(product.sauces);
    } else {
        document.getElementById('sauceSection').style.display = 'none';
    }
    
    document.getElementById('specialNotes').value = '';
    
    updateModalPrice();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentProduct = null;
}

function renderSizeOptions(sizes) {
    const container = document.getElementById('sizeOptions');
    container.innerHTML = '';
    
    sizes.forEach(size => {
        const option = document.createElement('div');
        option.className = 'config-option';
        if (size.id === selectedConfig.size) {
            option.classList.add('selected');
        }
        
        const label = currentLang === 'en' ? size.nameEn : size.nameAr;
        const priceText = size.price > 0 ? `+${size.price} AED` : '';
        
        option.innerHTML = `
            <span class="config-option-label">${label}</span>
            ${priceText ? `<span class="config-option-price">${priceText}</span>` : ''}
        `;
        
        option.addEventListener('click', () => {
            selectedConfig.size = size.id;
            document.querySelectorAll('#sizeOptions .config-option').forEach(el => {
                el.classList.remove('selected');
            });
            option.classList.add('selected');
            updateModalPrice();
        });
        
        container.appendChild(option);
    });
}

function renderExtrasOptions(extras) {
    const container = document.getElementById('extrasOptions');
    container.innerHTML = '';
    
    extras.forEach(extra => {
        const checkbox = document.createElement('div');
        checkbox.className = 'config-checkbox';
        
        const label = currentLang === 'en' ? extra.nameEn : extra.nameAr;
        
        checkbox.innerHTML = `
            <input type="checkbox" class="checkbox-input" id="extra-${extra.id}">
            <span class="checkbox-label">${label}</span>
            <span class="checkbox-price">+${extra.price} AED</span>
        `;
        
        const input = checkbox.querySelector('input');
        input.addEventListener('change', () => {
            if (input.checked) {
                selectedConfig.extras.push(extra.id);
                checkbox.classList.add('selected');
            } else {
                selectedConfig.extras = selectedConfig.extras.filter(id => id !== extra.id);
                checkbox.classList.remove('selected');
            }
            updateModalPrice();
        });
        
        container.appendChild(checkbox);
    });
}

function renderSauceOptions(sauces) {
    const container = document.getElementById('sauceOptions');
    container.innerHTML = '';
    
    sauces.forEach(sauce => {
        const option = document.createElement('div');
        option.className = 'config-option';
        
        const [en, ar] = sauce.split(' | ');
        const sauceName = en;
        
        if (sauceName === selectedConfig.sauce) {
            option.classList.add('selected');
        }
        
        option.innerHTML = `
            <span class="config-option-label">${currentLang === 'en' ? en : ar}</span>
        `;
        
        option.addEventListener('click', () => {
            selectedConfig.sauce = sauceName;
            document.querySelectorAll('#sauceOptions .config-option').forEach(el => {
                el.classList.remove('selected');
            });
            option.classList.add('selected');
            updateModalPrice();
        });
        
        container.appendChild(option);
    });
}

function increaseQuantity() {
    modalQuantity++;
    document.getElementById('quantityValue').textContent = modalQuantity;
    updateModalPrice();
}

function decreaseQuantity() {
    if (modalQuantity > 1) {
        modalQuantity--;
        document.getElementById('quantityValue').textContent = modalQuantity;
        updateModalPrice();
    }
}

function updateModalPrice() {
    if (!currentProduct) return;
    
    let totalPrice = currentProduct.price;
    
    // Add size price
    if (selectedConfig.size && currentProduct.sizes) {
        const size = currentProduct.sizes.find(s => s.id === selectedConfig.size);
        if (size) totalPrice += size.price;
    }
    
    // Add extras price
    if (currentProduct.extras) {
        selectedConfig.extras.forEach(extraId => {
            const extra = currentProduct.extras.find(e => e.id === extraId);
            if (extra) totalPrice += extra.price;
        });
    }
    
    // Multiply by quantity
    totalPrice *= modalQuantity;
    
    document.getElementById('btnPrice').textContent = `${totalPrice} AED`;
}

// ===================================
// CART MANAGEMENT
// ===================================
function addToCart() {
    if (!currentProduct) return;
    
    const notes = document.getElementById('specialNotes').value;
    selectedConfig.notes = notes;
    
    let itemPrice = currentProduct.price;
    
    // Calculate item price with configs
    if (selectedConfig.size && currentProduct.sizes) {
        const size = currentProduct.sizes.find(s => s.id === selectedConfig.size);
        if (size) itemPrice += size.price;
    }
    
    if (currentProduct.extras) {
        selectedConfig.extras.forEach(extraId => {
            const extra = currentProduct.extras.find(e => e.id === extraId);
            if (extra) itemPrice += extra.price;
        });
    }
    
    const cartItem = {
        id: Date.now(), // Unique ID for cart item
        product: currentProduct,
        config: { ...selectedConfig },
        quantity: modalQuantity,
        unitPrice: itemPrice,
        totalPrice: itemPrice * modalQuantity
    };
    
    cart.push(cartItem);
    saveCart();
    updateCartDisplay();
    closeModal();
    
    // Show success animation
    const cartBtn = document.getElementById('cartButton');
    cartBtn.style.animation = 'none';
    setTimeout(() => {
        cartBtn.style.animation = '';
    }, 10);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartDisplay();
}

function updateCartItemQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    item.totalPrice = item.unitPrice * item.quantity;
    saveCart();
    updateCartDisplay();
}

function updateCartDisplay() {
    const floatingCartCount = document.getElementById('floatingCartCount');
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    
    // Update floating cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    floatingCartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        floatingCartCount.classList.add('show');
    } else {
        floatingCartCount.classList.remove('show');
    }
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <svg class="empty-cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p data-en="Your cart is empty" data-ar="سلتك فارغة">
                    ${currentLang === 'en' ? 'Your cart is empty' : 'سلتك فارغة'}
                </p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => createCartItemHTML(item)).join('');
        
        // Add event listeners to cart item buttons
        cart.forEach(item => {
            const editBtn = document.querySelector(`[data-edit="${item.id}"]`);
            const removeBtn = document.querySelector(`[data-remove="${item.id}"]`);
            const decreaseBtn = document.querySelector(`[data-decrease="${item.id}"]`);
            const increaseBtn = document.querySelector(`[data-increase="${item.id}"]`);
            
            if (editBtn) editBtn.addEventListener('click', () => editCartItem(item.id));
            if (removeBtn) removeBtn.addEventListener('click', () => removeFromCart(item.id));
            if (decreaseBtn) decreaseBtn.addEventListener('click', () => updateCartItemQuantity(item.id, -1));
            if (increaseBtn) increaseBtn.addEventListener('click', () => updateCartItemQuantity(item.id, 1));
        });
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    totalAmount.textContent = `${total} AED`;
}

function editCartItem(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    
    // Open modal with current product and configuration
    currentProduct = item.product;
    modalQuantity = item.quantity;
    selectedConfig = { ...item.config };
    
    const modal = document.getElementById('productModal');
    const name = currentLang === 'en' ? item.product.nameEn : item.product.nameAr;
    
    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalPrice').textContent = `${item.product.price} AED`;
    document.getElementById('quantityValue').textContent = modalQuantity;
    
    // Render size options
    if (item.product.sizes && item.product.sizes.length > 0) {
        document.getElementById('sizeSection').style.display = 'block';
        renderSizeOptions(item.product.sizes);
    } else {
        document.getElementById('sizeSection').style.display = 'none';
    }
    
    // Render extras
    if (item.product.extras && item.product.extras.length > 0) {
        document.getElementById('extrasSection').style.display = 'block';
        renderExtrasOptions(item.product.extras);
        
        // Pre-select extras
        item.config.extras.forEach(extraId => {
            const checkbox = document.getElementById(`extra-${extraId}`);
            if (checkbox) {
                checkbox.checked = true;
                checkbox.closest('.config-checkbox').classList.add('selected');
            }
        });
    } else {
        document.getElementById('extrasSection').style.display = 'none';
    }
    
    // Render sauces
    if (item.product.sauces && item.product.sauces.length > 0) {
        document.getElementById('sauceSection').style.display = 'block';
        renderSauceOptions(item.product.sauces);
    } else {
        document.getElementById('sauceSection').style.display = 'none';
    }
    
    document.getElementById('specialNotes').value = item.config.notes || '';
    
    // Remove the old item before adding the updated one
    cart = cart.filter(i => i.id !== itemId);
    saveCart();
    updateCartDisplay();
    
    updateModalPrice();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Close cart sidebar
    closeCart();
}

function createCartItemHTML(item) {
    const name = currentLang === 'en' ? item.product.nameEn : item.product.nameAr;
    const configText = formatCartConfig(item);
    
    return `
        <div class="cart-item">
            <div class="cart-item-image">
                <!-- Image: products/${item.product.id}.jpg -->
                📷
            </div>
            <div class="cart-item-details">
                <div class="cart-item-header">
                    <div class="cart-item-name">${name}</div>
                    <div class="cart-item-actions">
                        <button class="cart-item-edit" data-edit="${item.id}" title="${currentLang === 'en' ? 'Edit' : 'تعديل'}">
                            ✏️
                        </button>
                        <button class="cart-item-remove" data-remove="${item.id}">×</button>
                    </div>
                </div>
                ${configText ? `<div class="cart-item-config">${configText}</div>` : ''}
                <div class="cart-item-footer">
                    <div class="cart-item-quantity">
                        <button class="cart-qty-btn" data-decrease="${item.id}">-</button>
                        <span class="cart-qty-value">${item.quantity}</span>
                        <button class="cart-qty-btn" data-increase="${item.id}">+</button>
                    </div>
                    <div class="cart-item-price">${item.totalPrice} AED</div>
                </div>
            </div>
        </div>
    `;
}

function formatCartConfig(item) {
    const parts = [];
    
    // Size
    if (item.config.size && item.product.sizes) {
        const size = item.product.sizes.find(s => s.id === item.config.size);
        if (size) {
            const sizeName = currentLang === 'en' ? size.nameEn : size.nameAr;
            parts.push(sizeName);
        }
    }
    
    // Extras
    if (item.config.extras.length > 0 && item.product.extras) {
        item.config.extras.forEach(extraId => {
            const extra = item.product.extras.find(e => e.id === extraId);
            if (extra) {
                const extraName = currentLang === 'en' ? extra.nameEn : extra.nameAr;
                parts.push(extraName);
            }
        });
    }
    
    // Sauce
    if (item.config.sauce) {
        parts.push(item.config.sauce);
    }
    
    // Notes
    if (item.config.notes) {
        parts.push(currentLang === 'en' ? `Note: ${item.config.notes}` : `ملاحظة: ${item.config.notes}`);
    }
    
    return parts.join(' • ');
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.body.style.overflow = '';
}

function saveCart() {
    localStorage.setItem('nouralsham_cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('nouralsham_cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
            updateCartDisplay();
        } catch (e) {
            cart = [];
        }
    }
}

// ===================================
// WHATSAPP ORDER
// ===================================
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert(currentLang === 'en' ? 'Your cart is empty!' : 'سلتك فارغة!');
        return;
    }
    
    const messageEn = generateWhatsAppMessage('en');
    const messageAr = generateWhatsAppMessage('ar');
    
    const fullMessage = `${messageEn}\n\n${'─'.repeat(30)}\n\n${messageAr}`;
    
    const phoneNumber = '971585229499';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
    
    window.open(whatsappURL, '_blank');
}

function generateWhatsAppMessage(lang) {
    const isEnglish = lang === 'en';
    
    let message = isEnglish ? '🍽️ *Order from Nour Alsham*\n\n' : '🍽️ *طلب من نور الشام*\n\n';
    
    cart.forEach((item, index) => {
        const name = isEnglish ? item.product.nameEn : item.product.nameAr;
        message += `${index + 1}. *${name}*\n`;
        message += `   ${isEnglish ? 'Quantity' : 'الكمية'}: ${item.quantity}\n`;
        message += `   ${isEnglish ? 'Price' : 'السعر'}: ${item.totalPrice} AED\n`;
        
        // Configuration
        const config = [];
        
        if (item.config.size && item.product.sizes) {
            const size = item.product.sizes.find(s => s.id === item.config.size);
            if (size) {
                config.push(isEnglish ? size.nameEn : size.nameAr);
            }
        }
        
        if (item.config.extras.length > 0 && item.product.extras) {
            item.config.extras.forEach(extraId => {
                const extra = item.product.extras.find(e => e.id === extraId);
                if (extra) {
                    config.push(isEnglish ? extra.nameEn : extra.nameAr);
                }
            });
        }
        
        if (item.config.sauce) {
            config.push(item.config.sauce);
        }
        
        if (config.length > 0) {
            message += `   ${isEnglish ? 'Options' : 'الخيارات'}: ${config.join(', ')}\n`;
        }
        
        if (item.config.notes) {
            message += `   ${isEnglish ? 'Notes' : 'ملاحظات'}: ${item.config.notes}\n`;
        }
        
        message += '\n';
    });
    
    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    message += `\n*${isEnglish ? 'Total' : 'المجموع'}: ${total} AED*`;
    
    return message;
}
