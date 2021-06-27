from inventory_api import init_app
import uvicorn

app = init_app()

if __name__ == "__main__":
    uvicorn.run(app)