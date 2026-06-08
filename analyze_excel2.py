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
    # Unique values for key columns
    for col in df.columns:
        nunique = df[col].nunique()
        if nunique < 30:
            print(f"  {col} unique values ({nunique}): {df[col].dropna().unique().tolist()}")
    print("\nFirst 5 rows (columns only):")
    for i, row in df.head(5).iterrows():
        vals = []
        for col in df.columns:
            v = str(row[col])[:30] if pd.notna(row[col]) else ''
            vals.append(f"{col}={v}")
        print(f"  Row {i}: {' | '.join(vals)}")

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
        for col in df.columns:
            nunique = df[col].nunique()
            if nunique < 30:
                print(f"  {col} unique values ({nunique}): {df[col].dropna().unique().tolist()}")
    except Exception as e:
        print(f"Error reading: {e}")
