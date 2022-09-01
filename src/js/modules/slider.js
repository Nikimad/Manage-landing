import A11YSlider from "a11y-slider";

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: {
        480: {
            dots: false,
        }
    }
});