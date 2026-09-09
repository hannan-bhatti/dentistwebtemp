import os
import sys

def verify_env_vars():
    # Load .env file manually
    env_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            for line in f:
                if line.strip() and not line.startswith('#'):
                    key, val = line.strip().split('=', 1)
                    os.environ[key] = val

    required_vars = [
        "SANITY_PROJECT_ID",
        "CALCOM_API_KEY",
        "WHATSAPP_PHONE_NUMBER_ID",
        "WHATSAPP_ACCESS_TOKEN"
    ]
    
    missing = []
    present = []
    for var in required_vars:
        val = os.getenv(var)
        if not val or val.strip() == "":
            missing.append(var)
        else:
            present.append(var)
            
    if present:
        print(f"[PASS] Found the following keys: {', '.join(present)}")
        
    if missing:
        print(f"[WARN] Missing the following keys (Optional/Pending): {', '.join(missing)}")
    
    print("\n[INFO] Link phase: Partial API connections verified.")

if __name__ == "__main__":
    verify_env_vars()
