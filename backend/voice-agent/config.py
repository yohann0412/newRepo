# Configuration file for Bland AI Voice Agent
# Replace the placeholder values with your actual credentials

# Your Bland AI API key
# Get this from your Bland AI dashboard
API_KEY = "your_bland_ai_api_key_here"

# Your pathway ID for restaurant catering inquiries (optional)
# Get this from your Bland AI pathways dashboard
# If not provided, the system will use task-based calls instead
PATHWAY_ID = "your_pathway_id_here"

# Alternative: Use task-based calls instead of pathways
# Set to True to use task-based calls, False to use pathways
USE_TASK_BASED_CALLS = True

# Custom task prompt (only used if USE_TASK_BASED_CALLS is True)
# Leave empty to use auto-generated tasks from requirements
CUSTOM_TASK = """Call [RESTAURANT_NAME] to ask about catering for [CLIENT_NAME]'s event. They need food for [GUEST_COUNT] people on [EVENT_DATE] with a budget around [BUDGET_RANGE].

Sound natural and conversational - don't be robotic. Ask questions like you're actually planning an event, not reading from a script.

Start with: "Hi, I'm calling about catering for an upcoming event. Do you handle events of this size?"

Key things to find out:
- What catering options do you have for [GUEST_COUNT] people?
- What's your per-person pricing and what's included?
- Can you handle dietary restrictions (vegetarian, gluten-free, etc.)?
- Do you provide staff, setup, and delivery?
- What's your lead time and cancellation policy?
- Any additional fees I should know about?

Example questions to ask naturally:
- "What kind of menus do you offer for corporate events?"
- "Does that price include plates and serving staff?"
- "How far in advance do you need the final count?"
- "What happens if we need to make changes?"

Get their contact info and ask them to email a quote. Sound interested but not desperate - like you're comparing a few places.

Take good notes and be polite. If they can't help, thank them and move on. If they sound good, ask about next steps for booking."""

# API base URL (usually doesn't need to change)
BASE_URL = "https://api.bland.ai/v1"

# Call timeout settings (in seconds)
CALL_TIMEOUT = 300  # 5 minutes
CHECK_INTERVAL = 10  # Check status every 10 seconds

# Phone number format preferences
# Set to True to enforce E.164 format validation
ENFORCE_E164_FORMAT = True

# Logging configuration
LOG_LEVEL = "INFO"  # DEBUG, INFO, WARNING, ERROR
LOG_TO_FILE = False
LOG_FILE_PATH = "voice_agent.log"

API_KEY = "org_984e2aaad1993874b7806883c0d68e46ad3b717df99f90ede19b4f52b32bafbf03f6fae42cf12c024df569"