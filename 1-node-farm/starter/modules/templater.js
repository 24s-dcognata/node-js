module.exports = (temp, product) => {
    let otp = temp.replaceAll('{% product_image %}', product.image);
    otp = otp.replaceAll('{% product_name %}', product.productName);
    otp = otp.replaceAll('{% product_quantity %}', product.quantity);
    otp = otp.replaceAll('{% product_price %}', product.price);
    otp = otp.replaceAll('{% product_id %}', product.id);
    otp = otp.replaceAll('{% product_description %}', product.description);
    otp = otp.replaceAll('{% product_nutrients %}', product.nutrients);
    otp = otp.replaceAll('{% product_from %}', product.from);
    
    otp = (product.organic === false) ? otp.replaceAll('{% not_organic %}', 'not-organic') : otp.replaceAll('{% not_organic %}', '');

    return otp;
};