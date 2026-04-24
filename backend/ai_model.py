from groq import Groq

client = Groq(api_key="")

def get_ai_response(text):
    prompt = f"""
You are a financial assistant that extracts and summarizes receipt data.

IMPORTANT RULES:
- Do NOT use Markdown symbols like ###, ##, *, -, or tables.
- Do NOT add formatting characters.
- Return clean plain text only.
- Keep output simple and structured with labels.

Task:
- Extract transactions (merchant, amount, category)
- Identify total spend
- Give category-wise summary
- Provide insights

Input:
{text}

Output format:

Transactions:
Merchant:
Amount:
Category:

Summary:
Total Spend:
Category Breakdown:

Insights:

Return ONLY valid JSON

"""

    completion = client.chat.completions.create(
        model="llama-3.1-8b-instant"
,
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return completion.choices[0].message.content
