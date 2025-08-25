document.addEventListener('DOMContentLoaded', function() {
    // بيانات وهمية للجدول
    const attendanceData = [
        { employee: 'أحمد محمد', date: '2025-08-25', time: '09:00 AM', location: 'القاهرة، مصر (30.0444, 31.2357)', status: 'حاضر' },
        { employee: 'فاطمة علي', date: '2025-08-25', time: '09:15 AM', location: 'الإسكندرية، مصر (31.2001, 29.9187)', status: 'حاضر' },
        { employee: 'محمد حسن', date: '2025-08-25', time: '10:00 AM', location: 'الجيزة، مصر (30.0131, 31.2089)', status: 'متأخر' },
        // أضف المزيد إذا لزم
    ];

    // ملء الجدول
    const tableBody = document.querySelector('#attendanceTable tbody');
    attendanceData.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.employee}</td>
            <td>${record.date}</td>
            <td>${record.time}</td>
            <td>${record.location}</td>
            <td>${record.status}</td>
        `;
        tableBody.appendChild(row);
    });

    // إعداد الخريطة باستخدام Leaflet
    const map = L.map('map').setView([30.0444, 31.2357], 13); // مركز على القاهرة افتراضيًا
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // إضافة علامات لمواقع وهمية
    L.marker([30.0444, 31.2357]).addTo(map).bindPopup('موقع أحمد: القاهرة');
    L.marker([31.2001, 29.9187]).addTo(map).bindPopup('موقع فاطمة: الإسكندرية');

    // زر Check-In: استخدام GeoLocation API لتحديد الموقع
    document.getElementById('checkInBtn').addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                alert(`تم تسجيل حضورك في الموقع: (${lat}, ${lon})`);
                // هنا هترسل البيانات للـ backend عبر fetch API
                // مثال: fetch('/api/checkin', { method: 'POST', body: JSON.stringify({ lat, lon }) });
                
                // تحديث الخريطة
                L.marker([lat, lon]).addTo(map).bindPopup('موقعك الحالي').openPopup();
                map.setView([lat, lon], 13);
            }, error => {
                alert('خطأ في تحديد الموقع: ' + error.message);
            });
        } else {
            alert('المتصفح لا يدعم تحديد الموقع.');
        }
    });
});