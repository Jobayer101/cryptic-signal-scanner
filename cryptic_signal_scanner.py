import streamlit as st
import pandas as pd
import webbrowser

# === Page Setup ===
st.set_page_config(page_title="Cryptic Entry Signal Scanner", layout="wide")
st.title("🚀 Cryptic Entry Signal Scanner")

st.markdown("""
This tool checks each coin against your Cryptic Entry rules and shows:

- 🚀 **Conviction Entry** (6+ points)  
- ✅ **Strong Setup** (4–5 points)  
- ⚠️ **Neutral / Needs Confirm** (3 points)  
- ❌ **No Trade** (0–2 points)
""")

# === Upload CSV ===
uploaded_file = st.file_uploader("📤 Upload your coin data (CSV format)", type=["csv"])

# === Signal Score Logic ===
def signal_score(row):
    score = 0
    score += int(row['Volume_24h_%'] >= 60)
    score += int(row['OI_24h_%'] >= 4)
    score += int(row['OI_1h_%'] >= 1.5)
    score += int(row['Funding_Rate'] <= 0)
    score += int(row['Slope'] >= 0.18)
    score += int(row['Kalman'] >= 0.12)
    score += int(row['CVD_Delta'] > 0)
    return score

def signal_label(score):
    if score >= 6:
        return '🚀 CONVICTION ENTRY'
    elif score >= 4:
        return '✅ STRONG SETUP'
    elif score == 3:
        return '⚠️ NEUTRAL / NEEDS CONFIRM'
    else:
        return '❌ NO TRADE'

# === Process File ===
if uploaded_file is not None:
    df = pd.read_csv(uploaded_file)

    # Apply logic
    df['Signal_Score'] = df.apply(signal_score, axis=1)
    df['Signal_Label'] = df['Signal_Score'].apply(signal_label)

    st.success("✅ Scanned successfully!")
    st.dataframe(df, use_container_width=True)

    # Download button
    csv = df.to_csv(index=False).encode('utf-8')
    st.download_button(
        label="📥 Download Signal Report",
        data=csv,
        file_name="cryptic_signal_report.csv",
        mime="text/csv"
    )

else:
    st.info("📎 Please upload a CSV file with columns: `Coin`, `Kalman`, `Slope`, `Volume_24h_%`, `OI_24h_%`, `OI_1h_%, CVD_Delta`, `Funding_Rate`.")

# Auto-launch in browser
webbrowser.open("http://localhost:8501")
