function productSizes(product) {
    let sizes = [`${product.availableSizes[0]} inches (${product.availableSizes[0] * 2.54.toFixed(0)} cm)`];
    for (let i = 1; i < product.availableSizes.length; i++) {
        sizes.push(` | ${product.availableSizes[i]} inches (${product.availableSizes[i] * 2.54.toFixed(0)} cm)`);
    }

    return sizes;
}

export default productSizes;

