import { environment } from "../../../../environments/environment";

const version = "v1";
const domainUrl = `${environment.APIUrl}/${version}`;

export const API_URLS = {
  /* Static JSON files */
  REGEX: `config/regex-config.json`,
  /**
   * COMMON
   */
  DYNAMIC_DDL_URL: (url) => `${domainUrl}/${url}`,
  CALL_TO_ACTION_LIST_URL: `${domainUrl}/call-to-actions`,
  /**
   * AUTHENTICATION
   */
  LOGIN: `${domainUrl}/auth/dashboard-login`,
  CHANGE_PASSWORD: (userId) =>
    `${domainUrl}/auth/${userId}/portal-change-password`,
  FIRST_TIME_PASSWORD: (userId) =>
    `${domainUrl}/auth/${userId}/first-time-password`,
  /**
   * USER
   */
  USERS_LIST: (pageNumber, size) =>
    `${domainUrl}/users?page=${pageNumber}&size=${size}`,
  USERS_SEARCH: ({ pageNumber, pageSize, keyword }) =>
    `${domainUrl}/users/search?page=${pageNumber}&size=${pageSize}&keyword=${keyword}`,
  USERS_BY_ID_LIST: (pageNumber, size) =>
    `${domainUrl}/users?page=${pageNumber}&size=${size}`,
  USERS_DETAILS: (userId) => `${domainUrl}/users/${userId}`,
  ADD_USER: `${domainUrl}/users`,
  DEACTIAVTE_USER: (id) => `${domainUrl}/users/${id}/deactivate`,
  ACTIAVTE_USER: (id) => `${domainUrl}/users/${id}/activate`,
  USER_UPDATE: (userId) => `${domainUrl}/users/${userId}`,
  /**
   * Transaction
   */
  TRANSACTION_LIST: (pageNumber) => `${domainUrl}/txns?page=${pageNumber}`,
  TRANSACTION_STATUS: `${domainUrl}/txns/statuses`,
  TRANSACTION_ACTIONS_LIST: `${domainUrl}/txns/actions`,
  TRANSACTION_TYPES: `${domainUrl}/txns/types`,
  TRANSACTION_DETAILS: (id) => `${domainUrl}/txns/${id}`,
  TRANSACTION_ACTION: (txnId, actionId) =>
    `${domainUrl}/txns/${txnId}/action/${actionId}`,
  TRANSACTION_CONFIRM_DELIVERY: (txnId) =>
    `${domainUrl}/txns/${txnId}/delivery-confirmation`,
  TRANSACTION_CONFIRM_COMPLETION: (txnId) =>
    `${domainUrl}/txns/${txnId}/delivery-completion`,
  TRANSACTION_ADD_ORDER: (txnId) => `${domainUrl}/txns/${txnId}/items`,
  TRANSACTION_UPDATE_ORDER: (txnId) => `${domainUrl}/txns/${txnId}/items`,
  /**
   * LOOKUPS
   */
  COMPANY_INDUSTRIES: `${domainUrl}/lookups/company-industries`,
  /**
   * LOCATION LOOKUPS
   */
  COUNTRIES: `${domainUrl}/lookups/countries`,
  CITIES: (countryId) => `${domainUrl}/lookups/cities?countryId=${countryId}`,
  AREAS: (cityId) => `${domainUrl}/lookups/${cityId}/areas`,
  ALL_AREAS: `${domainUrl}/lookups/areas`,
  DISTRICTS: (areaId) => `${domainUrl}/lookups/${areaId}/districts`,
  DISTRICT_SEARCH: ({ pageNumber, pageSize }) =>
    `${domainUrl}/lookups/districts/search?page=${pageNumber}&size=${pageSize}`,
  USER_TYPES: `${domainUrl}/lookups/user-types`,
  ALL_USER_TYPES: `${domainUrl}/lookups/user-types/all`,
  SALES_AGENTS_TYPES: `${domainUrl}/lookups/user-types/sales-agent`,
  /**
   * BUYER LOOKUPS
   */
  BUYER_TYPES: `${domainUrl}/lookups/buyer-types`,
  BUYER_BUSINESS_TYPES: (buyerTypeId) =>
    `${domainUrl}/lookups/buyer-types/${buyerTypeId}/business-types`,
  /**
   * SUPPLIER LOOKUPS
   */
  SUPPLIER_TYPES: `${domainUrl}/lookups/supplier-types`,
  SUPPLIER_BUSINESS_TYPES: (supplierTypeId) =>
    `${domainUrl}/lookups/supplier-types/${supplierTypeId}/business-types`,

  /**
   * BUYER
   */
  BUYER_LIST: (pageNumber) => `${domainUrl}/buyers?page=${pageNumber}`,
  BUYER_DETAILS: (id) => `${domainUrl}/buyers/${id}`,
  BUYER_BALANCE: (id) => `${domainUrl}/buyers/${id}/wallet-balance`,
  EDIT_BUYERS: (id) => `${domainUrl}/buyers/${id}`,
  EDIT_BUYERS_SETTINGS: (id) => `${domainUrl}/buyers/${id}/settings`,
  BUYER_WALLET_SUMMARY: (id) => `${domainUrl}/buyers/${id}/wallet-summary`,
  BUYER_WALLET_TRANSACTIONS: ({ buyerId, pageNumber, pageSize }) =>
    `${domainUrl}/buyers/${buyerId}/wallet-txn?page=${pageNumber}&size=${pageSize}`,
  EDIT_BUYERS_INFO_REQUEST: (id) =>
    `${domainUrl}/buyers/${id}/info-update-requests`,
  ADD_BUYERS: `${domainUrl}/buyers`,
  COMPENSATE_BUYERS: (id) => `${domainUrl}/buyers/${id}/compensations`,
  DEACTIAVTE_BUYERS: (id) => `${domainUrl}/buyers/${id}/deactivate`,
  ACTIAVTE_BUYERS: (id) => `${domainUrl}/buyers/${id}/activate`,
  LIST_BUYERS_FROM_FILE: () => `${domainUrl}/buyers/list-buyers-from-file`,
  AVAILABLE_PROMOTION_FOR_BUYER: (buyerId) =>
    `${domainUrl}/promotion/available-promotions?buyerId=${buyerId}`,
  CURRENT_REWARDS_PROGRAM_CHALLENGE_FOR_BUYER: (buyerId) =>
    `${domainUrl}/buyers/${buyerId}/current-program-challenge`,
  CURRENT_REWARDS_PROGRAM_FOR_BUYER: (buyerId) =>
    `${domainUrl}/buyers/${buyerId}/current-program`,
  BUYER_ACCOUNTS_COUNT: (buyerId) =>
    `${domainUrl}/buyers/${buyerId}/associated-accounts/count`,
  BUYER_REWARD_HISTORY: (buyerId) =>
    `${domainUrl}/buyers/${buyerId}/rewards-history`,
  LIST_ASSOCIATED_BUYERS: (buyerId, pageNumber, pageSize) =>
    `${domainUrl}/buyers/${buyerId}/associated-accounts?page=${pageNumber}&size=${pageSize}`,
  LIST_BUYER_DEVICES: (buyerId, pageNumber, pageSize) =>
    `${domainUrl}/buyers/${buyerId}/devices?page=${pageNumber}&size=${pageSize}`,
  LOCK_LOCATION: (buyerId) =>
    `${domainUrl}/buyers/${buyerId}/enable-geolocation-restriction`,
  UNLOCK_LOCATION: (buyerId) =>
    `${domainUrl}/buyers/${buyerId}/disable-geolocation-restriction`,
  BUYER_KYC: (buyerId) => `${domainUrl}/buyers/${buyerId}/buyer-kyc`,

  /**
   * SUPPLIER
   */
  SUPPLIER_LIST: (pageNumber) => `${domainUrl}/suppliers?page=${pageNumber}`,
  SUPPLIER_SEARCH: ({ pageNumber, pageSize, keyword }) =>
    `${domainUrl}/suppliers/search?page=${pageNumber}&size=${pageSize}&keyword=${keyword}`,
  SUPPLIER_DETAILS: (id) => `${domainUrl}/suppliers/${id}`,
  UPDATE_DELIVERY_CONFIGURATION: (id) =>
    `${domainUrl}/suppliers/${id}/delivery-configuration`,
  EDIT_SUPPLIERS: (id) => `${domainUrl}/suppliers/${id}`,
  ADD_SUPPLIER: `${domainUrl}/suppliers`,
  DEACTIAVTE_SUPPLIERS: (id) => `${domainUrl}/suppliers/${id}/deactivate`,
  ACTIAVTE_SUPPLIERS: (id) => `${domainUrl}/suppliers/${id}/activate`,
  EDIT_SUPPLIER_FULFILLMENT_AREAS: (id) =>
    `${domainUrl}/suppliers/${id}/fulfillment-areas`,
  EDIT_SUPPLIER_FULFILLMENT_BUSINESS_TYPES: (id) =>
    `${domainUrl}/suppliers/${id}/fulfillment-buyer-business-types`,
  /**
   * SUPPLIER RANKING
   */
  SUPPLIER_RANK_LIST: ({ pageSize, pageNumber }) =>
    `${domainUrl}/suppliers/ranking?page=${pageNumber}&size=${pageSize}`,
  ADJUST_SUPPLIER_RANKING: (id) => `${domainUrl}/suppliers/${id}/ranking`,
  /**
   * Merchant Banners
   */
  BANNERS_URL: `${domainUrl}/banners`,
  BANNER_DETAILS_URL: (id) => `${domainUrl}/banners/${id}`,
  BANNERS_REORDER_URL: `${domainUrl}/banners/order-arrangement`,
  BANNER_REMOVE_FILE: (bannerId, documentId) =>
    `${domainUrl}/banners/${bannerId}/documents/${documentId}`,
  /**
   * PRODUCTS & BUNDLES
   */
  ADD_PRODUCTS: `${domainUrl}/products`,
  PRODUCT_DETAILS: (id) => `${domainUrl}/products/admin/${id}`,
  PRODUCT_EXPORT: (supplierId) =>
    `${domainUrl}/products/export?supplierId=${supplierId}`,
  EDIT_PRODUCT: (id) => `${domainUrl}/products/${id}`,
  ACTIAVTE_PRODUCT: (id) => `${domainUrl}/products/${id}/activate`,
  DEACTIAVTE_PRODUCT: (id) => `${domainUrl}/products/${id}/deactivate`,
  ACTIAVTE_BUNDLE: (id) => `${domainUrl}/bundles/${id}/activate`,
  DEACTIAVTE_BUNDLE: (id) => `${domainUrl}/bundles/${id}/deactivate`,
  ADMIN_PRODUCT_LIST: `${domainUrl}/products/admin`,
  BUNDLES_URL: `${domainUrl}/bundles`,
  BUNDLE_DETAILS: (id) => `${domainUrl}/bundles/${id}`,
  BUNDLE_EXPORT_BUYERS: (id) =>
    `${domainUrl}/bundles/${id}/export-bundle-buyers`,
  PRODUCT_LIST: ({ pageSize, pageNumber }) =>
    `${domainUrl}/products/admin?page=${pageNumber}&size=${pageSize}`,
  PRODUCT_BY_SUPPLIER: ({ productId, supplierId }) =>
    `${domainUrl}/products/${productId}/by-supplier?supplierId=${supplierId}`,
  BUNDLES_LIST: (pageNumber, pagSize) =>
    `${domainUrl}/bundles?page=${pageNumber}&size=${pagSize}`,
  ADD_PACKAGING: (id) => `${domainUrl}/products/${id}/package-units-details`,
  ADD_NEW_PRICING: (productId, pkgUnitDetailsId) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}/prices`,
  PRODUCT_LIST_PRICES: (productId) =>
    `${domainUrl}/products/${productId}/prices`,
  PRODUCT_FULFILLMENT_BY_SUPPLIER: (productId) =>
    `${domainUrl}/products/${productId}/supplier`,
  ADD_FULFILLMENT_BY_SUPPLIER: (productId) =>
    `${domainUrl}/products/${productId}/supplier`,
  ADD_FULFILLMENT_BY_SUPPLIER_LINK: (productId) =>
    `${domainUrl}/products/${productId}/supplier-link`,
  DELETE_FULFILLMENT_BY_SUPPLIER: (productId) =>
    `${domainUrl}/products/${productId}/supplier`,
  SUPPLIER_COMMISSION: (productId) =>
    `${domainUrl}/products/${productId}/supplier/commission`,
  DISCOUNT_TYPE: `${domainUrl}/lookups/discount-types`,
  POSTPAID_PRICE: (id) =>
    `${domainUrl}/products/${id}/calculate-postpaid-price`,
  CANCEL_UPCMONG: (productId, pkgUnitDetailsId, priceId) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}/prices/${priceId}/cancel`,
  UPDATE_PRODUCT_UPCOMING_PACKAGE_UNIT_PRICE: (
    productId,
    pkgUnitDetailsId,
    priceId
  ) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}/prices/${priceId}`,
  UPDATE_PRODUCT_ACTIVE_PACKAGE_UNIT_PRICE: (
    productId,
    pkgUnitDetailsId,
    priceId
  ) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}/prices/${priceId}/discount`,
  ADD_PRODUCT_PACKAGE_UNIT_PRICE: (productId, pkgUnitDetailsId) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}/prices`,

  ACTIAVTE_PRODUCT_PACKAGE_UNIT: (productId, pkgUnitDetailsId) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}/activate`,
  DEACTIAVTE_PRODUCT_PACKAGE_UNIT: (productId, pkgUnitDetailsId) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}/deactivate`,
  SET_DEFAULT_PRODUCT_PACKAGE_UNIT: (productId, pkgUnitDetailsId) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}/default`,
  UPDATE_PRODUCT_PACKAGE_UNIT: (productId, pkgUnitDetailsId) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}`,
  PRODUCT_PACKAGE_UNIT_DETAILS: (productId, pkgUnitDetailsId) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}`,
  PRODUCT_PACKAGE_HISTORY: (productId, pkgUnitDetailsId, pageNumber) =>
    `${domainUrl}/products/${productId}/package-units-details/${pkgUnitDetailsId}/prices?page=${pageNumber}`,

  /**
   * CATEGORY
   */
  ADD_CATEGORIES: `${domainUrl}/products/categories`,
  EDIT_CATEGORY: (id) => `${domainUrl}/products/categories/${id}`,
  CATEGORY_DETAILS: (id) => `${domainUrl}/products/categories/${id}`,
  CATEGORY_LIST: (pageNumber) =>
    `${domainUrl}/products/categories?page=${pageNumber}`,

  /**
   * BRAND
   */
  ADD_BRAND: `${domainUrl}/products/brands`,
  EDIT_BRAND: (id) => `${domainUrl}/products/brands/${id}`,
  BRAND_LIST: (pageNumber, pageSize) =>
    `${domainUrl}/products/brands?page=${pageNumber}&size=${pageSize}`,
  BRAND_DETAILS: (id) => `${domainUrl}/products/brands/${id}`,

  /**
   * PACKAGING_UNIT
   */

  PACKAGING_UNITS_LIST: (pageNumber) =>
    `${domainUrl}/products/package-units?page=${pageNumber}`,
  PACKAGING_UNITS_FULL_LIST: `${domainUrl}/products/package-units/all`,
  CATEGORY_PACKAGING_UNITS_LIST: (categoryId) =>
    `${domainUrl}/products/package-units/categories?categoryId=${categoryId}`,
  BRAND_PACKAGING_UNITS_LIST: (brandId) =>
    `${domainUrl}/products/package-units/brands?brandId=${brandId}`,
  MANUFACTURER_PACKAGING_UNITS_LIST: (manufacturerId) =>
    `${domainUrl}/products/package-units/manufactures?manufactureId=${manufacturerId}`,
  EDIT_PACKAGING_UNIT: (id) => `${domainUrl}/products/package-units/${id}`,
  ADD_PACKAGING_UNIT: `${domainUrl}/products/package-units`,
  PACKAGING_UNIT_DETAILS: (id) => `${domainUrl}/products/package-units/${id}`,
  DELETE_PACKAGING_UNIT_LIMIT: (productId, packaginUnitId, limitId) =>
    `${domainUrl}/products/${productId}/package-units-details/${packaginUnitId}/limits/${limitId}`,
  /**
   * Manufactures
   */
  MANUFACTURES_LIST: (pageNumber) =>
    `${domainUrl}/products/manufactures?page=${pageNumber}`,
  MANUFACTURE_DETAILS: (id) => `${domainUrl}/products/manufactures/${id}`,
  EDIT_MANUFACTURE: (id) => `${domainUrl}/products/manufactures/${id}`,
  ADD_MANUFACTURE: `${domainUrl}/products/manufactures`,
  DEACTIAVTE_MANUFACTURE: (id) =>
    `${domainUrl}/products/manufactures/${id}/deactivate`,
  ACTIAVTE_MANUFACTURE: (id) =>
    `${domainUrl}/products/manufactures/${id}/activate`,

  /**
   * Orders
   */
  ORDER_LIST: ({ pageNumber, size }) =>
    `${domainUrl}/orders?page=${pageNumber}&size=${size}`,
  ORDER_DETAILS: (id) => `${domainUrl}/orders/${id}`,
  CANCEL_ORDER: (id) => `${domainUrl}/orders/${id}/cancel`,
  RESCHEDULE_DELIVERY_DATE: (id) =>
    `${domainUrl}/orders/${id}/reschedule-delivery-date`,
  ORDER_FINANCIAL: (id) => `${domainUrl}/orders/${id}/financial-transactions`,
  ORDER_ITEMS_LIST: (id, pageNumber, size) =>
    `${domainUrl}/orders/${id}/items?page=${pageNumber}&size=${size}`,
  BUNDLE_ITEMS_LIST: (id, pageNumber, size) =>
    `${domainUrl}/orders/${id}/bundles?page=${pageNumber}&size=${size}`,
  DELIVERY_INFORMATION: (taskId) => `${domainUrl}/tasks/${taskId}`,
  CONFRIM_RETURNED_ITEM: (taskId) =>
    `${domainUrl}/tasks/${taskId}/confirm-returned-items`,
  DELIVERY_AGENT: (id, pageNumber) =>
    `${domainUrl}/suppliers/${id}/delivery-agents?page=${pageNumber}`,
  CREATE_ORDER: `${domainUrl}/orders`,
  UPDATE_ORDER: (id) => `${domainUrl}/orders/${id}`,
  ORDER_REASONING: (id) => `${domainUrl}/orders/${id}/verified-reason`,
  RELATED_ORDERS: (orderId) => `${domainUrl}/orders/${orderId}/related-orders`,

  /**
   * Pricings
   */
  PRICING_LIST: ({ pageNumber, pageSize }) =>
    `${domainUrl}/products/bulk-prices-updates?page=${pageNumber}&size=${pageSize}`,
  /**
   * Monitor sales agent visits
   * @param pageNumber pagination page value
   * @param pageSize size of list to be fetched
   * @returns url string
   */
  MONITOR_SA_VISIT_LIST: ({ pageNumber, pageSize }) =>
    `${domainUrl}/sales-agent/visits?page=${pageNumber}&size=${pageSize}`,
  /**
   * Bulk Assignment
   */
  BULK_VISITS_LIST: ({ pageNumber, pageSize }) =>
    `${domainUrl}/sales-agent/bulk-visits?page=${pageNumber}&size=${pageSize}`,
  BULK_VISITS_INITIATE_UPLOAD_DOCUMENT: `${domainUrl}/sales-agent/bulk-visits/initiate-upload-document`,
  BULK_VISITS_COMPLETE_UPLOAD_DOCUMENT: `${domainUrl}/sales-agent/bulk-visits/complete-upload-document`,
  /**
   *  file upload
   */
  PRODUCT_INITIATE_UPLOAD: (id) =>
    `${domainUrl}/products/${id}/initiate-upload-document`,
  COMPLETE_PRODUCT_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/products/${id}/complete-upload-document`,
  PRODUCT_REMOVE_FILE: (productId, documentId) =>
    `${domainUrl}/products/${productId}/documents/${documentId}`,
  BRAND_INITIATE_UPLOAD: (id) =>
    `${domainUrl}/products/brands/${id}/initiate-upload-document`,
  BRAND_COMPLETE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/products/brands/${id}/complete-upload-document`,
  BRAND_REMOVE_FILE: (brandId, documentId) =>
    `${domainUrl}/products/brands/${brandId}/documents/${documentId}`,
  CATEGORY_INITIATE_UPLOAD: (id) =>
    `${domainUrl}/products/categories/${id}/initiate-upload-document`,
  CATEGORY_COMPLETE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/products/categories/${id}/complete-upload-document`,
  CATEGORY_REMOVE_FILE: (categoryId, documentId) =>
    `${domainUrl}/products/categories/${categoryId}/documents/${documentId}`,
  BUYER_INITIATE_UPLOAD: (id) =>
    `${domainUrl}/buyers/${id}/initiate-upload-document`,
  BUYER_COMPLETE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/buyers/${id}/complete-upload-document`,
  BUYER_REMOVE_FILE: (buyerId, documentId) =>
    `${domainUrl}/buyers/${buyerId}/documents/${documentId}`,
  SUPPLIER_INITIATE_UPLOAD: (id) =>
    `${domainUrl}/suppliers/${id}/initiate-upload-document`,
  SUPPLIER_COMPLETE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/suppliers/${id}/complete-upload-document`,
  SUPPLIER_STOCK_LIST: ({ pageNumber, pageSize, supplierId }) =>
    `${domainUrl}/suppliers/stock-allocation?supplierId=${supplierId}&page=${pageNumber}&size=${pageSize}`,
  SUPPLIER_INITIATE_STOCK_UPLOAD: (id) =>
    `${domainUrl}/suppliers/${id}/stock-allocation/initiate-upload-document`,
  SUPPLIER_COMPLETE_STOCK_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/suppliers/${id}/stock-allocation/complete-upload-document`,
  SUPPLIER_DEACTIVATE_STOCK_ALLOCATION: (id) =>
    `${domainUrl}/suppliers/${id}/stock-allocation/deactivate`,
  SUPPLIER_REMOVE_FILE: (supplierId, documentId) =>
    `${domainUrl}/suppliers/${supplierId}/documents/${documentId}`,
  USER_INITIATE_UPLOAD: (id) =>
    `${domainUrl}/users/${id}/initiate-upload-document`,
  USER_COMPLETE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/users/${id}/complete-upload-document`,
  USER_REMOVE_FILE: (userId, documentId) =>
    `${domainUrl}/users/${userId}/documents/${documentId}`,
  PRODUCT_PRICE_INITIATE_UPLOAD_DOCUMENT: `${domainUrl}/products/bulk-prices-updates/initiate-upload-document`,
  PRODUCT_PRICE_COMPLETE_UPLOAD_DOCUMENT: `${domainUrl}/products/bulk-prices-updates/complete-upload-document`,
  MERCHANT_BANNER_INITIATE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/banners/${id}/initiate-upload-document`,
  MERCHANT_BANNER_COMPLETE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/banners/${id}/complete-upload-document`,

  /**
   * Accounting
   */
  ACCOUNTIG_PENDING_LIST: (pageNumber, size) =>
    `${domainUrl}/tasks/deliveries/collected-payments?page=${pageNumber}&size=${size}`,
  ACCOUNTIG_RUNSHEET_LIST: ({ pageNumber, size }) =>
    `${domainUrl}/accounting/delivery-trips?page=${pageNumber}&size=${size}`,
  ACCOUNTING_WRC_LIST: ({ pageNumber, size }) =>
    `${domainUrl}/accounting/sales-agent-visits?page=${pageNumber}&size=${size}`,
  DELIVERY_AGENTS: ({ pageNumber, id }) =>
    `${domainUrl}/users?page=${pageNumber}&userTypeIds=${id}`,
  ACCOUNTING_ORDER_REQUEST_DETAILS: (id) =>
    `${domainUrl}/accounting/orders/${id}`,
  ACCOUNTING_WRC_REQUEST_DETAILS: (id) =>
    `${domainUrl}/accounting/wallet-recharge-requests/${id}`,
  ACCOUNTING_RUNSHEET_DETAILS: (id) =>
    `${domainUrl}/accounting/delivery-trips/${id}`,
  DEPOSIT_COLLECTED_REQUEST: (id) =>
    `${domainUrl}/accounting/requests/${id}/deposit`,
  ACCOUNTING_RUNSHEET_CASH_ADJUSTMENT: (id) =>
    `${domainUrl}/accounting/delivery-trips/${id}/cash-adjustment`,
  /** Order invoice PDF */
  PDF_SERVICE_URL: `${
    environment.production
      ? "https://pdf-generator.capiter.org/export-orders"
      : " https://pdf-generator.staging.capiter.io/export-orders"
  }`,

  /**
   * Promotions
   */
  PROMOTION_LIST: (pageNumber) => `${domainUrl}/promotion?page=${pageNumber}`,
  ADD_PROMOTION: `${domainUrl}/promotion`,
  PROMOTION_MERCHANTS_LIST: (id) => `${domainUrl}/promotion/${id}/buyer`,
  PROMOTION_BASIC_INFORMATION_DETAILS: (id) => `${domainUrl}/promotion/${id}`,
  UPDATE_PROMOTION_BASIC_INFORMATION: (id) => `${domainUrl}/promotion/${id}`,
  UPDATE_PROMOTION_AREAS: (id) => `${domainUrl}/promotion/${id}/area`,
  UPDATE_PROMOTION_SUPPLIERS: (id) => `${domainUrl}/promotion/${id}/supplier`,
  PROMOTION_BUNDLE_BRAND: (id) =>
    `${domainUrl}/promotion/${id}/triggers/bundle-brands`,
  PROMOTION_BUNDLE_CATEGORY: (id) =>
    `${domainUrl}/promotion/${id}/triggers/bundle-categories`,
  PROMOTION_BUNDLE_MANUFACTURER: (id) =>
    `${domainUrl}/promotion/${id}/triggers/bundle-manufactures`,
  PROMOTION_BUNDLE_PRODUCT: (id) =>
    `${domainUrl}/promotion/${id}/triggers/bundle-products`,
  PROMOTION_BUNDLE_ORDER_NUMBER: (id) =>
    `${domainUrl}/promotion/${id}/trigger/order-number`,
  REMOVE_PROMOTION_BUNDLE: (id) =>
    `${domainUrl}/promotion/${id}/trigger?triggerIds=`,
  PROMOTION_INCENTIVE_ORDER_DISCOUNT: (id) =>
    `${domainUrl}/promotion/${id}/incentive`,
  PROMOTION_INCENTIVE_CASHBACK: (id) =>
    `${domainUrl}/promotion/${id}/incentive/cashback`,
  /**
   * Delivery Dispatcher
   */
  DELIVERY_REQUEST_LIST: ({ pageNumber, pageSize }) =>
    `${domainUrl}/fleet/delivery-dispatcher/requests?page=${pageNumber}&size=${pageSize}`,
  CREATE_TRIP: `${domainUrl}/fleet/delivery-trips`,
  // TODO: add actual API
  VALIDATE_TRIP: `${domainUrl}/fleet/requests/suppliers`,
  TRIP_FULFILMENT_CENTRES: `${domainUrl}/fleet/delivery-trips`,
  //
  DELIVERY_TRIPS_LIST: ({ pageNumber, pageSize }) =>
    `${domainUrl}/fleet/delivery-trips?page=${pageNumber}&size=${pageSize}`,
  DELETE_TRIP_SHEET: (id) => `${domainUrl}/fleet/delivery-trips/${id}`,
  DELETE_ORDER_FROM_RUNSHEET: (id) =>
    `${domainUrl}/fleet/delivery-trips/${id}/remove-orders`,
  UNASSIGN_AGENT_TRIP_SHEET: (id) =>
    `${domainUrl}/fleet/delivery-trips/${id}/agent-unassignment`,
  UNASSIGN_REQUESTS: (requestCode) =>
    `${domainUrl}/fleet/delivery-dispatcher/unassigned-requests?requestCode=${requestCode}`,
  ASSIGN_UNASSIGN_REQUESTS: (id) =>
    `${domainUrl}/fleet/delivery-trips/${id}/task-adding`,
  REASSGIN_AGENT_TO_TRIP: (id) =>
    `${domainUrl}/fleet/delivery-trips/${id}/agent-reassignment`,
  REASSGIN_VEHICLE_TO_TRIP: (id) =>
    `${domainUrl}/fleet/delivery-trips/${id}/vehicle-assignment`,
  REASSGIN_FULFILMENT_CENTRE_TO_TRIP: (id) =>
    `${domainUrl}/fleet/delivery-trips/${id}/fulfillment-centre-reassignment`,
  ASSGIN_AGENT_TO_TRIP: (id) =>
    `${domainUrl}/fleet/delivery-trips/${id}/agent-assignment`,
  RUNSHEET_DETAILS: (id) => `${domainUrl}/fleet/delivery-trips/${id}/requests`,
  RUNSHEET_DETAILS_PRODUCTS: (id) =>
    `${domainUrl}/fleet/delivery-trips/${id}/products`,
  VEHICLE_SEARCH: ({ pageNumber, pageSize }) =>
    `${domainUrl}/fleet/vehicles/search?page=${pageNumber}&size=${pageSize}`,
  TRIP_DETAILS: (id) => `${domainUrl}/fleet/delivery-trips/${id}/data-capture`,
  /**
   * TeleSales
   */

  CREATE_SALES_TASK: `${domainUrl}/sales-agent`,
  SALES_AGENT_RETAILERS_LIST: ({ pageNumber, size }) =>
    `${domainUrl}/sales-agent/retailers?page=${pageNumber}&size=${size}`,
  SALES_AGENT_RETAILER_VISIT_LIST: ({
    pageNumber,
    size,
    buyerId,
    taskStatus,
  }) =>
    `${domainUrl}/sales-agent/tasks?buyerId=${buyerId}&page=${pageNumber}&size=${size}&salesTaskStatus=${taskStatus}`,
  SALES_AGENT_TASKS_LIST: ({ pageNumber, size }) =>
    `${domainUrl}/sales-agent/tasks?page=${pageNumber}&size=${size}`,
  MARK_SALES_AGENT_TASK: (id) => `${domainUrl}/sales-agent/${id}/visit`,
  SALES_AGENT_TASKS_ACTIONS: `${domainUrl}/sales-agent/tasks`,
  /**
   * Return Specialist
   */
  RETURN_SPECIALIST_ORDERS_LIST: ({ pageNumber, pageSize }) =>
    `${domainUrl}/fleet/return-specialist/orders?page=${pageNumber}&size=${pageSize}`,
  RETURN_SPECIALIST_RUNSHEET_DETAILS: (id) =>
    `${domainUrl}/fleet/delivery-trips/${id}/requests`,
  RETURN_SPECIALIST_RUNSHEET_SUBMIT: (id) =>
    `${domainUrl}/fleet/delivery-trips/${id}/delivery-returns`,
  /**
   * wallet topup
   */
  WALLET_TOPUP_INITIATE_UPLOAD_DOCUMENT: `${domainUrl}/wallets/bulk-top-up/initiate-upload-document`,
  WALLET_TOPUP_COMPLETE_UPLOAD_DOCUMENT: `${domainUrl}/wallets/bulk-top-up/complete-upload-document`,
  WALLET_TOPUP_RECEIPT: `${domainUrl}/wallets/bulk-top-up/receipt`,
  WALLET_TOPUP_LIST: ({ pageNumber, pageSize }) =>
    `${domainUrl}/wallets/bulk-top-up?page=${pageNumber}&size=${pageSize}`,
  /**
   * OTPs
   */
  OTP_GENERATION: `${domainUrl}/otps`,
  /**
   * Activation Management
   */
  ACTIVATION_MEETING_POINTS_URL: `${domainUrl}/buyer-activation/meeting-points`,
  ACTIVATION_MEETING_POINTS_UPDATE_URL: (id) =>
    `${domainUrl}/buyer-activation/meeting-points/${id}`,
  ACTIVATION_MEETING_POINTS_LIST_URL: (pageNumber, pageSize) =>
    `${domainUrl}/buyer-activation/meeting-points?page=${pageNumber}&size=${pageSize}`,
  ACTIVATION_ROUTES_URL: `${domainUrl}/buyer-activation/routes`,
  ACTIVATION_ROUTES_UPDATE_URL: (id) =>
    `${domainUrl}/buyer-activation/routes/${id}`,
  ACTIVATION_ROUTES_LIST_URL: (pageNumber, pageSize) =>
    `${domainUrl}/buyer-activation/routes?page=${pageNumber}&size=${pageSize}`,
  /**
   * Activation Operations
   */
  SUPERVISOR_STARTING_POINTS_LIST_URL: ({ supervisorId, pageNumber }) =>
    `${domainUrl}/buyer-activation/routes/supervisor-starting/${supervisorId}?page=${pageNumber}`,
  SUPERVISOR_ENDING_POINTS_LIST_URL: ({ supervisorId, pageNumber }) =>
    `${domainUrl}/buyer-activation/routes/supervisor-ending/${supervisorId}?page=${pageNumber}`,
  ACTIVATION_AGENT_ASSIGNMENT_URL: ({ routeId, agentId }) =>
    `${domainUrl}/buyer-activation/routes/${routeId}/activation-agent/${agentId}`,
  ACTIVATION_AGENT_CLOCK_OUT_URL: ({ routeId, agentId }) =>
    `${domainUrl}/buyer-activation/routes/${routeId}/activation-agent-clock-out/${agentId}`,
  ACTIVATION_SUPERVISOR_CLOCK_IN_STATUS_URL: ({ supervisorId }) =>
    `${domainUrl}/buyer-activation/meeting-points/supervisor-clocked-in/${supervisorId}`,
  ACTIVATION_SUPERVISOR_CLOCK_IN_URL: ({ supervisorId }) =>
    `${domainUrl}/buyer-activation/meeting-points/supervisor-clock-in/${supervisorId}`,
  ACTIVATION_SUPERVISOR_CLOCK_OUT_URL: ({ supervisorId }) =>
    `${domainUrl}/buyer-activation/meeting-points/supervisor-clock-out/${supervisorId}`,

  /**
   * Product Damages
   */
  PRODUCT_DAMAGE_REPORT_LIST_URL: ({ pageNumber, pageSize }) =>
    `${domainUrl}/products/damages?page=${pageNumber}&size=${pageSize}`,
  PRODUCT_ADD_DAMAGE_REPORT_URL: `${domainUrl}/products/damages`,
  PRODUCT_DAMAGE_REPORT_INITIATE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/products/damages/${id}/initiate-upload-document`,
  PRODUCT_DAMAGE_REPORT_COMPLETE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/products/damages/${id}/complete-upload-document`,
  SELLABLE_PRODUCT_IN_STOCK: (id) =>
    `${domainUrl}/products/${id}/sellable-in-stock`,
  PRODUCT_PACAKGING_UNIT_DETAILS: () => `${domainUrl}/stock/product-details`,
  PRODUCT_STOCK_ADJUSTMENT: () => `${domainUrl}/stock/product-adjustments`,
  PRODUCT_DAMAGE_IMPORT_INITIATE_UPLOAD_DOCUMENT: (supplierId) =>
    `${domainUrl}/stock/${supplierId}/bulk-stock-adjustment/initiate-upload-file`,
  PRODUCT_DAMAGE_IMPORT_COMPLETE_UPLOAD_DOCUMENT: (supplierId) =>
    `${domainUrl}/stock/${supplierId}/bulk-stock-adjustment/complete-upload-file`,
  PRODUCT_DAMAGE_IMPORT_EXPORT_TEMPLATE: (supplierId) =>
    `${domainUrl}/stock/${supplierId}/export-bulk-stock-adjustment-template`,
  /**
   * Wallet Recharge Amounts
   */
  WRC_AMOUNTS_URL: `${domainUrl}/wallet-recharge/amounts`,
  WRC_DELETE_AMOUNT_URL: (id) => `${domainUrl}/wallet-recharge/amounts/${id}`,
  /**
   * Product Catalog
   */
  PRODUCT_BUSINESS_TYPES_DETAILS: ({ buyerBusinessTypeId }) =>
    `${domainUrl}/products/buyer-business-type-categories?buyerBusinessTypeId=${buyerBusinessTypeId}`,
  UPDATE_PRODUCT_BUSINESS_TYPES: ({ buyerBusinessUnitId }) =>
    `${domainUrl}/products/buyer-business-type-categories/${buyerBusinessUnitId}/configuration`,
  PRODUCT_BUYER_TYPES: `${domainUrl}/lookups/buyer-business-types`,
  /**
   * Recharge Services
   */
  WALLET_RECHARGE_REQUEST_LIST: (page, size) =>
    `${domainUrl}/wallet-recharge/requests?page=${page}&size=${size}`,
  TELECOM_RECHARGE_REQUEST_LIST: (page, size) =>
    `${domainUrl}/fawry/transactions?page=${page}&size=${size}`,
  TELECOM_RECHARGE_BILLER_NAMES_LIST: `${domainUrl}/fawry/billers-names`,
  TELECOM_RECHARGE_SERVICE_NAMES_LIST: `${domainUrl}/fawry/services-names`,
  /**
   * Rewards
   */
  REWARDS_PROGRAM_LIST: ({ pageNumber, pageSize }) =>
    `${domainUrl}/rewards?page=${pageNumber}&size=${pageSize}`,
  REWARD_PROGRAM_DETAILS: (id) => `${domainUrl}/rewards/${id}`,
  ADD_REWARD_PROGRAM: `${domainUrl}/rewards`,
  UPDATE_REWARD_BASIC_INFORMATION: (id) => `${domainUrl}/rewards/${id}`,
  UPDATE_REWARD_INCENTIVE: (id) => `${domainUrl}/rewards/${id}`,
  ADD_REWARD_INCENTIVE: (id) => `${domainUrl}/rewards/${id}/incentives`,
  REWARD_INCENTIVE_LIST: (id) => `${domainUrl}/rewards/${id}/incentives`,
  REWARD_BUYER_SEGMENT: ({ pageNumber, pageSize }) =>
    `${domainUrl}/buyer-segments?page=${pageNumber}&size=${pageSize}`,
  BUYER_REWARDS: ({ buyerId, pageNumber, pageSize }) =>
    `${domainUrl}/rewards/buyer-rewards?buyerId=${buyerId}&page=${pageNumber}&size=${pageSize}`,
  TOP_UP_BUFFER_DAYS: () => `${domainUrl}/rewards/buffer-days`,

  /**
   * Vehicle
   */
  VEHICLES_MANAGEMENT_LIST: ({ pageNumber, pageSize }) =>
    `${domainUrl}/fleet/vehicles?page=${pageNumber}&size=${pageSize}`,
  VEHICLES_MANAGEMENT_DETAILS: (id) => `${domainUrl}/fleet/vehicles/${id}`,
  CREATE_VEHICLE: `${domainUrl}/fleet/vehicles`,
  UPDATE_VEHICLE: (id) => `${domainUrl}/fleet/vehicles/${id}`,
  DEACTIVATE_VEHICLE: (id) => `${domainUrl}/fleet/vehicles/${id}/deactivate`,
  ACTIVATE_VEHICLE: (id) => `${domainUrl}/fleet/vehicles/${id}/activate`,
  DEACTIVATE_VEHICLE_OWNERS: (id) =>
    `${domainUrl}/fleet/vehicles/owners/${id}/deactivate`,
  ACTIVATE_VEHICLE_OWNERS: (id) =>
    `${domainUrl}/fleet/vehicles/owners/${id}/activate`,
  VEHICLE_SUPPLIERS: `${domainUrl}/fleet/vehicles/suppliers`,
  VEHICLE_OWNER: (pageNumber, pageSize) =>
    `${domainUrl}/fleet/vehicles/owners?page=${pageNumber}&size=${pageSize}`,
  VEHICLE_OWNER_DETAILS: (id) => `${domainUrl}/fleet/vehicles/owners/${id}`,
  ADD_VEHICLE_OWNER: `${domainUrl}/fleet/vehicles/owners`,
  UPDATE_VEHICLE_OWNER: (id) => `${domainUrl}/fleet/vehicles/owners/${id}`,
  VEHICLE_OWNER_INITIATE_UPLOAD: (id) =>
    `${domainUrl}/fleet/vehicles/owners/${id}/initiate-upload-document`,
  COMPLETE_VEHICLE_OWNER_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/fleet/vehicles/owners/${id}/complete-upload-document`,
  VEHICLE_OWNER_REMOVE_FILE: (ownerId, documentId) =>
    `${domainUrl}/fleet/vehicles/owners/${ownerId}/documents/${documentId}`,
  /**
   * Season Campaign
   */
  SEASON_CAMPAIGN_LIST_URL: (pageNumber, size) =>
    `${domainUrl}/campaigns?page=${pageNumber}&size=${size}`,
  ADD_SEASON_CAMPAIGN: `${domainUrl}/campaigns`,
  SEASON_CAMPAIGN_DETAILS_URL: (campaigId) =>
    `${domainUrl}/campaigns/${campaigId}`,
  DEACTIVATE_CAMPAIGN: (id) => `${domainUrl}/campaigns/${id}/deactivate`,
  ACTIVATE_CAMPAIGN: (id) => `${domainUrl}/campaigns/${id}/activate`,
  /**
   * Sales Agents
   */
  SALES_AGENTS_LIST: ({ pageNumber, pageSize }) =>
    `${domainUrl}/sales-agent?page=${pageNumber}&size=${pageSize}`,
  SALES_AGENTS_BALANCE_HISTORY: ({ salesAgentId, pageNumber, pageSize }) =>
    `${domainUrl}/sales-agent/${salesAgentId}/balance-history?page=${pageNumber}&size=${pageSize}`,
  SALES_AGENTS_BALANCE: (salesAgentId) =>
    `${domainUrl}/sales-agent/${salesAgentId}/balance`,
  ADD_SALES_AGENTS_BALANCE: (salesAgentId) =>
    `${domainUrl}/sales-agent/${salesAgentId}/balance`,
  SALES_AGENTS_WALLET_RECHARGE: ({ salesAgentId, pageNumber, pageSize }) =>
    `${domainUrl}/sales-agent/${salesAgentId}/wallet-recharge?page=${pageNumber}&size=${pageSize}`,
  SALES_AGENTS_DETAILS: (id) => `${domainUrl}/sales-agent/${id}`,
  CREATE_SALES_AGENTS: `${domainUrl}/sales-agent/new`,
  UPDATE_SALES_AGENTS: (id) => `${domainUrl}/sales-agent/${id}`,
  /**
   * Season Campaign Sections
   */
  CAMPAIGN_SECTIONS: (id) => `${domainUrl}/campaigns/${id}/sections`,
  UPDATE_CAMPAIGN_SECTIONS: (campaignId, sectionId) =>
    `${domainUrl}/campaigns/${campaignId}/sections/${sectionId}`,
  CAMPAIGN_SECTIONS_INITIALTE_UPLOAD_DOCUMENT: (campaignId, sectionId) =>
    `${domainUrl}/campaigns/${campaignId}/sections/${sectionId}/initiate-upload-document`,
  CAMPAIGN_SECTIONS_COMPLETE_UPLOAD_DOCUMENT: (campaignId, sectionId) =>
    `${domainUrl}/campaigns/${campaignId}/sections/${sectionId}/complete-upload-document`,
  CAMPAIGN_SECTIONS_CALL_TO_ACTION_DETIALS: ({
    campaignId,
    sectionId,
    pageNumber,
    pageSize,
  }) =>
    `${domainUrl}/campaigns/${campaignId}/sections/${sectionId}/items?page=${pageNumber}&size=${pageSize}`,
  /**
   * loading Specialist runsheets
   */
  LOADIN_RUNSHEET_LIST: (pageNumber, pageSize) =>
    `${domainUrl}/warehouse/runsheets?page=${pageNumber}&size=${pageSize}`,
  LOADING_RUNSHEET_DETAILS: (id) => `${domainUrl}/warehouse/runsheets/${id}`,
  LOADING_SPECIALIST_LIST: `${domainUrl}/warehouse/users/types`,
  /**
   * Returns Specialist runsheets
   */
  RETURNS_SPECIALIST_RUNSHEET_LIST: (pageNumber, pageSize) =>
    `${domainUrl}/warehouse/runsheets/return-specialist?page=${pageNumber}&size=${pageSize}`,
  RETURNS_SPECIALIST_RUNSHEET_DETAILS: (id) =>
    `${domainUrl}/warehouse/runsheets/return-specialist/${id}`,
  RETURNS_SPECIALIST_LIST: `${domainUrl}/warehouse/users/types`,
  RETURNS_SPECIALIST_SEARCH: ({ pageNumber, pageSize, keyword }) =>
    `${domainUrl}/suppliers/search?page=${pageNumber}&size=${pageSize}&keyword=${keyword}`,

  /**
   * Warehouse Users
   */
  WAREHOUSE_USERS_LIST: (pageNumber, pageSize) =>
    `${domainUrl}/warehouse/users?page=${pageNumber}&size=${pageSize}`,
  WAREHOUSE_USER_TYPES: `${domainUrl}/warehouse/users/types`,
  ADD_WAREHOUSE_USER: `${domainUrl}/warehouse/users`,
  WAREHOUSE_USER_DETAILS: (id) => `${domainUrl}/warehouse/users/${id}`,
  /**
   * MERCHANT CHANNELS
   */
  MERCHANT_CHANNELS: `${domainUrl}/lookups/buyer-types`,
  MERCHANT_CHANNEL_DETAILS: (id) => `${domainUrl}/lookups/buyer-types/${id}`,
  MERCHANT_SUBCHANNELS: `${domainUrl}/lookups/buyer-business-types`,
  MERCHANT_SUBCHANNEL_DETAILS: (id) =>
    `${domainUrl}/lookups/buyer-business-types/${id}`,
  MERCHANT_SUBCHANNEL_CATEGORY: ({ subchannelId }) =>
    `${domainUrl}/products/buyer-business-type-categories/${subchannelId}/configuration`,
  MERCHANT_SUBCHANNEL_INITIATE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/lookups/buyer-business-types/${id}/initiate-upload-document`,
  MERCHANT_SUBCHANNEL_COMPLETE_UPLOAD_DOCUMENT: (id) =>
    `${domainUrl}/lookups/buyer-business-types/${id}/complete-upload-document`,
  MERCHANT_SUBCHANNEL_STARTER_REWARDS_SEGMENT: (id) =>
    `${domainUrl}/products/buyer-business-type-categories/segmentsbuyer?buyerBusinessTypeId=${id}`,
  PRODUCT_BUSINESS_TYPES_SEGMENTS: ({ buyerBusinessTypeId }) =>
    `${domainUrl}/buyer-business-type-segments?buyerBusinessTypeId=${buyerBusinessTypeId}`,
  /**
   * Season Campaign
   */
  REWARDS_SEGMENTS_LIST_URL: (pageNumber, size) =>
    `${domainUrl}/buyer-segments?page=${pageNumber}&size=${size}`,
  ADD_REWARDS_SEGMENTS: `${domainUrl}/buyer-segments`,
  MERCHANT_ASSIGNMENT_LIST_URL: (pageNumber, size) =>
    `${domainUrl}/buyer-segments/bulk-buyer-segments?page=${pageNumber}&size=${size}`,
  MERCHANT_ASSIGNMENT_INITIATE_UPLOAD_DOCUMENT: `${domainUrl}/buyer-segments/bulk-buyer-segments/initiate-upload-document`,
  MERCHANT_ASSIGNMENT_COMPLETE_UPLOAD_DOCUMENT: `${domainUrl}/buyer-segments/bulk-buyer-segments/complete-upload-document`,
  /*
   * Picking tab
   */
  PICKING_RUNSHEET_LIST: (pageNumber, pageSize) =>
    `${domainUrl}/warehouse/runsheets/picking-specialist?page=${pageNumber}&size=${pageSize}`,
  PICKING_RUNSHEET_DETAILS: (id) =>
    `${domainUrl}/warehouse/runsheets/picking-specialist/${id}`,
  /**
   * Verification requests
   */
  VERIFICATION_REQUESTS_LIST: ({ pageNumber, size }) =>
    `${domainUrl}/buyers/verification_requests?page=${pageNumber}&size=${size}`,
  /**
   * Shared
   */
  REASONS_LIST: (category) =>
    `${domainUrl}/lookups/reasons?category=${category}`,
  VEHICLES_LIST: ({ pageNumber, size }) =>
    `${domainUrl}/fleet/vehicles?page=${pageNumber}&size=${size}`,
  VEHICLE_MAKES: `${domainUrl}/fleet/vehicles/makes`,
  /**
   * Visit feedback
   */
  VISIT_FEEDBACK_LIST: `${domainUrl}/sales-agent/visit-feedbacks`,
  VISIT_FEEDBACK: (id) => `${domainUrl}/sales-agent/visit-feedbacks/${id}`,
  VISIT_FEEDBACK_RORDER: `${domainUrl}/sales-agent/visit-feedbacks/re-arrange`,
};
