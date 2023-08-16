const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Insira o nome do produto do seu evento!"],
    },
    description: {
        type: String,
        required: [true, "Insira a descrição do produto do seu evento!"],
    },
    category: {
        type: String,
        required: [true, "Insira a categoria de produto do seu evento!"],
    },
    start_Date: {
        type: Date,
        required: true,
    },
    Finish_Date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        default: "Running",
    },
    tags: {
        type: String,
    },
    originalPrice: {
        type: Number,
    },
    discountPrice: {
        type: Number,
        required: [true, "Insira o preço do produto do seu evento!"],
    },
    stock: {
        type: Number,
        required: [true, "Informe o estoque de produtos do seu evento!"],
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    shopId: {
        type: String,
        required: true,
    },
    shop: {
        type: Object,
        required: true,
    },
    sold_out: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Event", eventSchema);