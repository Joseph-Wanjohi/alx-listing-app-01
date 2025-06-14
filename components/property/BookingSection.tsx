const BookingSection: React.FC<{ price: number }> = ({price}) => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">${price} per night</h3>
            <div className="mt-4">
                <label>Check In</label>
                <input type="date" className="border p-2 w-full mt-2" />
            </div>
            <div className="mt-4">
                <label>Check Out</label>
                <input type="date" className="border p-2 w-full mt-2" />
            </div>

            {/* Total payment */}
            <div className="mt-4">
                <p>Total payment: <strong>${price*7}</strong></p>
            </div>

            {/* Reserve Button */}
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">
                Reserve Now
            </button>
        </div>
    );
}

export default BookingSection;
// This component provides a booking section for a property, allowing users to select check-in and check-out dates, view the total payment, and reserve the property. It uses Tailwind CSS for styling.