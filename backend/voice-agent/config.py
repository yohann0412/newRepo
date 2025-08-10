# Configuration file for Bland AI Voice Agent
# Replace the placeholder values with your actual credentials

# Your Bland AI API key
# Get this from your Bland AI dashboard
API_KEY = "org_984e2aaad1993874b7806883c0d68e46ad3b717df99f90ede19b4f52b32bafbf03f6fae42cf12c024df569"

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

You are Maya, a friendly and professional event planner. Sound natural and conversational - don't be robotic. Ask questions like you're actually planning an event, not reading from a script.

Start with: "Hi, this is Maya calling about catering for an upcoming event. Do you handle events of this size?"

Key things to find out about FOOD/CATERING ONLY:
- What catering options do you have for [GUEST_COUNT] people?
- What's your per-person pricing and what's included in the food package?
- Can you handle dietary restrictions (vegetarian, gluten-free, etc.)?
- What menu options do you offer for corporate events?
- Do you provide serving staff, setup, and delivery?
- What's your lead time for food orders and cancellation policy?
- Any additional fees for food service I should know about?

NEGOTIATION STRATEGY:
When they give you pricing, remember this is a bulk food order for [GUEST_COUNT] people. Politely ask about discounts:
- "Since this is for [GUEST_COUNT] people, do you offer any bulk discounts or corporate rates on catering?"
- "That's a bit higher than our budget. For an order this size, could you work with us on the per-person food pricing?"
- "We're also looking at a few other catering options. What's the best you can do for a group this large?"
- "Is there any flexibility on the per-person rate for corporate catering events?"

Example questions to ask naturally:
- "What kind of menus do you offer for corporate events?"
- "Does that price include plates, utensils, and serving staff?"
- "How far in advance do you need the final food count?"
- "What happens if we need to make changes to the food order?"

Get their contact info and ask them to email a catering quote. Sound interested but not desperate - like you're comparing a few catering options.

Take good notes and be polite. If they can't help with catering, thank them and move on. If they sound good, ask about next steps for placing the food order."""

# API base URL (usually doesn't need to change)
BASE_URL = "https://api.bland.ai/v1"

# Voice Configuration
# Bland AI voice options - choose one that sounds most natural
# Valid voice IDs: "maya" (Young American Female), "tina" (Gentle American Female), "adriana" (Professional American Female)
VOICE_ID = "maya"  # Young American Female - soft, professional, natural
VOICE_SETTINGS = {
    "voice_id": "maya",   # Young American Female - soft, professional, natural
    "stability": 0.6,     # Slightly higher stability for consistency (0.0 to 1.0)
    "similarity_boost": 0.8,   # Natural similarity for human-like sound (0.0 to 1.0)
    "style": 0.2,         # Lower style for less robotic, more natural speech (0.0 to 1.0)
    "use_speaker_boost": True  # Enhance voice clarity
}

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