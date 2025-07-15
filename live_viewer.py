import mysql.connector, time, os, json
from datetime import datetime

# Connect to MySQL
conn = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="sabub5",
    database="phone_store"
)
cursor = conn.cursor()

while True:
    os.system('cls' if os.name == 'nt' else 'clear')  # Clear the terminal screen
    print(f"\n🔄 Latest Orders (Updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')})\n")

    cursor.execute("SELECT id, order_details, total_items, total_cost, created_at FROM orders ORDER BY created_at DESC LIMIT 5")
    rows = cursor.fetchall()

    for row in rows:
        order_id, order_details_json, total_items, total_cost, created_at = row
        order_details = json.loads(order_details_json)

        print(f"🧾 Order ID: {order_id}")
        print(f"📦 Total Items: {total_items}")
        print(f"💵 Total Cost: ${total_cost:.2f}")
        print(f"🕒 Placed At: {created_at}")
        print("📋 Items:")
        for item in order_details:
            name = item.get("name", "Unknown")
            price = item.get("price", 0)
            quantity = item.get("quantity", 0)
            print(f"   - {name} (Qty: {quantity}, Price: ${price})")
        print("-" * 40)

    time.sleep(5)
