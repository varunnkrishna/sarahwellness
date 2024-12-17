export const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const navbarOffset = 80; // Height of your fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
