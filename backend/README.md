# FastAPI Project Setup

This is a guide to set up a FastAPI project.

## Prerequisites

- Python 3.10+
- pip (Python package installer)
- Virtual environment (optional but recommended)

## Setup Instructions

### Step 1: Clone the repository

Clone this repository to your local machine:

```bash
git clone git@github.com:LTN2412/Login-Page-Back-End.git
cd Login-Page-Back-End
```

### Step 2: Create and activate a virtual environment (optional but recommended)

On Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

### Step 3: Install the dependencies

Install the required Python packages using pip:

```bash
pip install -r requirements.txt
```

### Step 4: Run backend

```bash
uvicorn main:app --reload
```
