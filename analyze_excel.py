import pandas as pd

# === ANDREA'S FILE ===
print("=" * 80)
print("ANDREA: BASE CONSOLIDADA")
print("=" * 80)
xl = pd.ExcelFile(r'c:\Users\rodra\OneDrive\repos\atni-excel\ANDREA____BASE_CONSOLIDADA_PARA_TABLA_DINAMICA.xlsx')
print(f"\nSheets: {xl.sheet_names}")

for s in xl.sheet_names:
    print(f"\n{'='*60}")
    print(f"Sheet: {s}")
    print(f"{'='*60}")
    df = pd.read_excel(xl, sheet_name=s)
    print(f"Shape: {df.shape}")
    print(f"Columns: {list(df.columns)}")
    print("\nFirst 15 rows:")
    print(df.head(15).to_string())
    print("\nLast 3 rows:")
    print(df.tail(3).to_string())

# === VUELING FILE ===
print("\n\n" + "=" * 80)
print("VUELING: TEMPLATE")
print("=" * 80)
xl2 = pd.ExcelFile(r'c:\Users\rodra\OneDrive\repos\atni-excel\VUELING____.xlsx')
print(f"\nSheets: {xl2.sheet_names}")

for s in xl2.sheet_names:
    print(f"\n{'='*60}")
    print(f"Sheet: {s}")
    print(f"{'='*60}")
    try:
        df = pd.read_excel(xl2, sheet_name=s)
        print(f"Shape: {df.shape}")
        print(f"Columns: {list(df.columns)}")
        print("\nFirst 15 rows:")
        print(df.head(15).to_string())
    except Exception as e:
        print(f"Error reading: {e}")
