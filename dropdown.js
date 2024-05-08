document.addEventListener('DOMContentLoaded', function() {
  const featuresDropdown = document.getElementById('features-dropdown');
  const companyDropdown = document.getElementById('company-dropdown');

  // Show features dropdown on click
  document.querySelector('li:nth-child(1)').addEventListener('click', function() {
    featuresDropdown.style.display = 'block';
  });

  // Show company dropdown on click
  document.querySelector('li:nth-child(2)').addEventListener('click', function() {
    companyDropdown.style.display = 'block';
  });

  // Hide dropdowns when cursor is moved
  document.addEventListener('mousemove', function(e) {
    if (!isDescendant(featuresDropdown, e.target)) {
      featuresDropdown.style.display = 'none';
    }
    if (!isDescendant(companyDropdown, e.target)) {
      companyDropdown.style.display = 'none';
    }
  });

  // Function to check if an element is a descendant of another element
  function isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  // Dropdown functionality for all dropdowns
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseover", function() {
      dropdownMenu.style.display = "block";
    });

    dropdown.addEventListener("mouseout", function() {
      dropdownMenu.style.display = "none";
    });
  });
});
