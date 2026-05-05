/**
 * Document Discovery Filtering & Pagination Script
 * Handles client-side filtering, search, and pagination (10 items per page)
 */

(function() {
  'use strict';

  // Configuration
  const ITEMS_PER_PAGE = 10;

  // DOM elements
  const searchInput = document.getElementById('documentSearch');
  const categoryFilters = document.querySelectorAll('.filter-pill');
  const documentCards = document.querySelectorAll('.document-card');
  const documentList = document.getElementById('documentList');
  const emptyState = document.getElementById('emptyState');
  const resultCount = document.getElementById('resultCount');
  const paginationContainer = document.getElementById('paginationContainer');

  // State
  let activeCategory = 'All';
  let searchQuery = '';
  let currentPage = 1;
  let filteredDocuments = [];
  let totalPages = 0;

  /**
   * Get all filtered documents based on current filters
   */
  function getFilteredDocuments() {
    const filtered = [];

    documentCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const title = card.getAttribute('data-title').toLowerCase();
      const description = card.getAttribute('data-description').toLowerCase();

      // Check category match
      const categoryMatch = activeCategory === 'All' || category === activeCategory;

      // Check search match (searches in title and description)
      const searchMatch = !searchQuery || 
        title.includes(searchQuery) || 
        description.includes(searchQuery);

      // Add to filtered if matches
      if (categoryMatch && searchMatch) {
        filtered.push(card);
      }
    });

    return filtered;
  }

  /**
   * Calculate total pages based on filtered count
   */
  function calculateTotalPages(count) {
    return Math.ceil(count / ITEMS_PER_PAGE) || 1;
  }

  /**
   * Display documents for the current page
   */
  function displayPage() {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Hide all cards first
    documentCards.forEach(card => {
      card.style.display = 'none';
    });

    // Show only filtered cards for current page
    filteredDocuments.slice(startIndex, endIndex).forEach(card => {
      card.style.display = '';
    });

    // Update pagination controls
    updatePaginationControls();
  }

  /**
   * Update pagination button and page number UI
   */
  function updatePaginationControls() {
    if (!paginationContainer) return;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageNumbers = document.getElementById('pageNumbers');
    const currentPageNum = document.getElementById('currentPageNum');
    const totalPageNum = document.getElementById('totalPageNum');

    // Update page info
    if (currentPageNum) {
      currentPageNum.textContent = currentPage;
    }
    if (totalPageNum) {
      totalPageNum.textContent = totalPages;
    }

    // Update Previous button
    if (prevBtn) {
      if (currentPage === 1) {
        prevBtn.disabled = true;
        prevBtn.setAttribute('aria-disabled', 'true');
      } else {
        prevBtn.disabled = false;
        prevBtn.setAttribute('aria-disabled', 'false');
      }
    }

    // Update Next button
    if (nextBtn) {
      if (currentPage === totalPages) {
        nextBtn.disabled = true;
        nextBtn.setAttribute('aria-disabled', 'true');
      } else {
        nextBtn.disabled = false;
        nextBtn.setAttribute('aria-disabled', 'false');
      }
    }

    // Update page numbers
    if (pageNumbers) {
      pageNumbers.innerHTML = '';
      const maxVisible = 7; // Show max 7 page numbers
      let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      let endPage = Math.min(totalPages, startPage + maxVisible - 1);

      // Adjust start if we're near the end
      if (endPage - startPage + 1 < maxVisible) {
        startPage = Math.max(1, endPage - maxVisible + 1);
      }

      // Add first page and ellipsis if needed
      if (startPage > 1) {
        const firstPageBtn = createPageButton(1);
        pageNumbers.appendChild(firstPageBtn);

        if (startPage > 2) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'pagination-ellipsis';
          ellipsis.textContent = '...';
          pageNumbers.appendChild(ellipsis);
        }
      }

      // Add page numbers
      for (let page = startPage; page <= endPage; page++) {
        const pageBtn = createPageButton(page);
        pageNumbers.appendChild(pageBtn);
      }

      // Add last page and ellipsis if needed
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'pagination-ellipsis';
          ellipsis.textContent = '...';
          pageNumbers.appendChild(ellipsis);
        }

        const lastPageBtn = createPageButton(totalPages);
        pageNumbers.appendChild(lastPageBtn);
      }
    }
  }

  /**
   * Create a page number button
   */
  function createPageButton(pageNum) {
    const btn = document.createElement('button');
    btn.className = 'page-item';
    if (pageNum === currentPage) {
      btn.classList.add('active');
    }
    btn.textContent = pageNum;
    btn.setAttribute('aria-label', `Go to page ${pageNum}`);
    btn.setAttribute('aria-pressed', pageNum === currentPage ? 'true' : 'false');
    btn.addEventListener('click', () => goToPage(pageNum));
    return btn;
  }

  /**
   * Navigate to a specific page
   */
  function goToPage(pageNum) {
    pageNum = Math.max(1, Math.min(pageNum, totalPages));
    currentPage = pageNum;
    displayPage();
    // Smooth scroll to top of document list
    documentList.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /**
   * Go to next page
   */
  function nextPage() {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  }

  /**
   * Go to previous page
   */
  function previousPage() {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  }

  /**
   * Handle pagination button clicks
   */
  function handlePaginationClick(e) {
    const nextBtn = e.target.closest('#nextBtn');
    const prevBtn = e.target.closest('#prevBtn');

    if (nextBtn) {
      nextPage();
    } else if (prevBtn) {
      previousPage();
    }
  }

  /**
   * Filter documents based on category and search query
   */
  function filterDocuments() {
    filteredDocuments = getFilteredDocuments();
    totalPages = calculateTotalPages(filteredDocuments.length);
    currentPage = 1; // Reset to first page on filter change

    // Update result count
    resultCount.textContent = filteredDocuments.length;

    // Show or hide empty state
    if (filteredDocuments.length === 0) {
      documentList.style.display = 'none';
      emptyState.style.display = 'block';
      if (paginationContainer) {
        paginationContainer.style.display = 'none';
      }

      // Update empty message based on filters
      const emptyMessage = document.getElementById('emptyMessage');
      if (searchQuery && activeCategory !== 'All') {
        emptyMessage.textContent = `Aucun document trouvé correspondant à "${searchQuery}" dans ${activeCategory}.`;
      } else if (searchQuery) {
        emptyMessage.textContent = `Aucun document trouvé correspondant à "${searchQuery}".`;
      } else if (activeCategory !== 'All') {
        emptyMessage.textContent = `Aucun document trouvé dans ${activeCategory}.`;
      } else {
        emptyMessage.textContent = 'Try adjusting your search or filters to find what you\'re looking for.';
      }
    } else {
      documentList.style.display = '';
      emptyState.style.display = 'none';
      if (paginationContainer) {
        paginationContainer.style.display = '';
      }
      displayPage();
    }
  }

  /**
   * Handle category filter clicks
   */
  function handleCategoryFilter(e) {
    const button = e.target.closest('.filter-pill');
    if (!button) return;

    // Update active category
    activeCategory = button.getAttribute('data-category');

    // Update active state for all buttons
    categoryFilters.forEach(filter => {
      filter.classList.remove('active');
      filter.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    // Re-filter documents
    filterDocuments();
  }

  /**
   * Handle search input changes
   */
  function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase().trim();
    filterDocuments();
  }

  /**
   * Initialize event listeners
   */
  function init() {
    // Search input listener
    if (searchInput) {
      searchInput.addEventListener('input', handleSearch);
      searchInput.addEventListener('change', handleSearch);
    }

    // Category filter listeners
    const filterContainer = document.getElementById('categoryFilters');
    if (filterContainer) {
      filterContainer.addEventListener('click', handleCategoryFilter);
    }

    // Pagination listener
    if (paginationContainer) {
      paginationContainer.addEventListener('click', handlePaginationClick);
    }

    // Initial filter and display
    filterDocuments();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
