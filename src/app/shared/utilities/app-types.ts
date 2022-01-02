/** Contains the key to help get and set info from local storage */
export const LOCAL_STORAGE_PREFIX = "Capiter-LocalStore.key";
/** contains the user info when dealing with storage */
export const USER = "user";
/** contains the user type */
export const USER_TYPE = "user_type";
/** contains the user types */
export const USER_TYPES = "user_types";
export const DELIVERY_AGENT_ID = 4;
export const DEBOUNCE_TIME = 700;
// tabel listing number of items per page
export const PAGESIZE = 10;
export const PAGE_SIZE_OPTION = [10, 20, 50];
export const EXTENDED_PAGE_SIZE_OPTION = [
  ...PAGE_SIZE_OPTION,
  100,
  150,
  200,
  250,
];
/** TODO: remove the below temp solution for dispatching issue */
export const DISPATCHER_PAGE_SIZE_OPTIONS = [
  ...EXTENDED_PAGE_SIZE_OPTION,
  300,
  350,
];
export const MAX_PAGE_SIZE = 300;
export const SMALL_PAGESIZE = 5;
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB
export const ALLOW_MIME_TYPES = ["image/png", "image/jpg", "image/jpeg"];
export const FILE_ALLOW_MIME_TYPES = [
  "text/csv",
  "application/vnd.ms-excel",
  "application/vnd.ms-office",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
export const PARENT_CATEGORY_TYPE = "PARENT";
export const CHILD_CATEGORY_TYPE = "CHILD";
export const DEFAULT_CATEGORY_TYPES = [
  { name: "Parent", value: PARENT_CATEGORY_TYPE },
  { name: "Child", value: CHILD_CATEGORY_TYPE },
];

export const STATUS_LIST = [
  { name: "Requested", value: "REQUESTED" },
  { name: "Ready for pickup", value: "READY_FOR_PICKUP" },
  { name: "Shipping", value: "SHIPPING" },
  { name: "Partially delivered", value: "DELIVERED_PARTIALLY" },
  { name: "Delivered", value: "DELIVERED" },
  { name: "Canceled", value: "CANCELED_BEFORE_SHIPPING" },
  { name: "Returned", value: "CANCELED_AFTER_SHIPPING" },
];

export const ACTIVE_INACTIVE_STATUS_LIST = [
  { id: 1, name: "ACTIVE" },
  { id: 2, name: "INACTIVE" },
];
export const ACTIVATION_ROUTES_STATUS_LIST = [
  { id: 1, name: "COMPLETED" },
  { id: 2, name: "ASSIGNED" },
  { id: 3, name: "VACANT" },
];

export const SOURCE_LIST = [
  {
    id: 1,
    name: "Marketplace",
  },
  {
    id: 2,
    name: "Sales Team",
  },
  {
    id: 3,
    name: "Call Center",
  },
];
export const PAYMENTS_LIST = [
  { name: "Cash", id: 1 },
  { name: "Credit", id: 2 },
];
export const ORDER_FILTER_STATUS = [
  "PENDING_PICKUP_ONLY",
  "ASSIGNED_TO_ME_AS_AGENT_ONLY",
  "VISITED_BY_ME_AS_AGENT_ONLY",
];

export const ORDER_FILTER_TYPES = [
  { id: 1, name: "ORDER" },
  { id: 2, name: "WALLET_RECHARGE" },
];
export const YES_NO_OPTIONS = [
  {
    id: 1,
    name: "Yes",
    value: true,
    valueStr: "true",
  },
  {
    id: 2,
    name: "No",
    value: false,
    valueStr: "false",
  },
];

export const REQUEST_STATUS_LIST = [
  { name: "Unverified", value: "UNVERIFIED" },
  { name: "Pending Verification", value: "PENDING_VERIFICATION" },
  { name: "In progress", value: "IN_PROGRESS" },
  { name: "Verified", value: "VERIFIED" },
];

export const RETURNS_LIST = [
  { name: "Yes", value: "YES" },
  { name: "No", value: "NO" },
  { name: "Yes and not returned", value: "YES_AND_NOT_RETURNED" },
];
export const ORDER_VIEW = "orders";
export const RUNSHEET_VIEW = "runsheets";
export const DEFAULT_RESPONSIBLE_DEPARTMENTS = [
  { id: 1, name: "DELIVERY" },
  { id: 2, name: "INVENTORY" },
  { id: 3, name: "LOADING" },
  { id: 4, name: "INBOUND" },
];

export const WALLET_REFERENCE_TYPES = {
  ORDER_CHARGE: "ORDER_CHARGE",
  ORDER_REFUND: "ORDER_REFUND",
  ORDER_CASHBACK: "ORDER_CASHBACK",
  SERVICE_CHARGE: "SERVICE_CHARGE",
  CREDIT_EXPIRY: "CREDIT_EXPIRY",
  WALLET_RECHARGE: "WALLET_RECHARGE",
};
export const OTHER_REASON = "Other";
export const COMPENSATION_REASONS = [
  { id: 1, name: "Not Delivered Orders" },
  { id: 2, name: "Promotion Not Applied" },
  { id: 3, name: "Damaged Items" },
  { id: 4, name: "Near Expiry" },
  { id: 5, name: "Missed Items" },
  { id: 6, name: "Conflict with delivery agent" },
  { id: 7, name: "Different Items" },
  { id: 8, name: "Pricing Overpromising" },
  { id: 9, name: OTHER_REASON },
];
export const REQUESTED = "REQUESTED";
export const READY_FOR_PICKUP = "READY_FOR_PICKUP";
export const SHIPPING = "SHIPPING";
export const DELIVERED_PARTIALLY = "DELIVERED_PARTIALLY";
export const DELIVERED = "DELIVERED";
export const CANCELED = "CANCELED";
// action button types
export const BUTTON_ACTIONS = {
  CLOSE: "close",
  SUBMIT: "submit",
  EDIT: "edit",
};

export const SYSTEM_USERS_TYPES = {
  SUPERADMIN: "superadmin",
};
export const SUPPLIER_BUYER_EDIT_TYPES = {
  BASIC_INFORMATION: "basic information",
  LOCATION_INFORMATION: "location information",
  TYPES_BASIC_INFORMATION: "types basic information",
  VERIFICATION_INFORMATION: "unreachable toggle",
};

export const UPLOADING_TYPES = {
  COMMERCIAL_REGISTRATION_COPY: "COMMERCIAL_REGISTRATION_COPY",
  TAX_REGISTRATION_COPY: "TAX_REGISTRATION_COPY",
  LICENSE_COPY: "LICENSE_COPY",
  NATIONAL_ID_COPY_FRONT: "NATIONAL_ID_COPY_FRONT",
  NATIONAL_ID_COPY_BACK: "NATIONAL_ID_COPY_BACK",
  IMAGES: "IMAGES",
  BRAND_IMAGE: "BRAND_IMAGE",
  CATEGORY_IMAGE: "CATEGORY_IMAGE",
  BANNER_IMAGE: "BANNER_IMAGE",
  MERCHANTS_LIST: "MERCHANTS_LIST",
  DAMAGE_REPORT_IMAGE: "DAMAGE_REPORT_IMAGE",
  DRIVING_LICENSE_COPY: "DRIVING_LICENSE_COPY",
  FACILITY_IMAGE: "FACILITY_IMAGE",
  CAMPAIGN_SECTION_IMAGE: "CAMPAIGN_SECTION_IMAGE",
  SUB_CHANNEL_IMAGE: "BUYER_BUSINESS_TYPE_IMAGE",
};
export const SUPPLIER_TYPES = {
  PARTNER: {
    id: 1,
    name: "Partner",
  },
  DISTRIBUTOR: {
    id: 2,
    name: "Distributor",
  },
  MANUFACTURER: {
    id: 3,
    name: "Manufacturer",
  },
  MARKETPLACE: {
    id: 4,
    name: "Marketplace",
  },
};
export const SUPPORTED_IMG_TYPES = ["image/jpeg", "image/jpg"];
export const USERS_TYPE = {
  ADMIN: "ADMIN",
  CUSTOMER: "Customer",
  SALES_AGENT: "SALES_AGENT",
  DELIVERY_AGENT: "DELIVERY_AGENT",
  WAREHOUSE_MANAGER: "WAREHOUSE_MANAGER",
  ACCOUNTING_AGENT: "ACCOUNTING_AGENT",
  ACCOUNTING_MANAGER: "ACCOUNTING_MANAGER",
  PURCHASING_MANAGER: "PURCHASING_MANAGER",
  OPERATIONS_MANAGER: "OPERATIONS_MANAGER",
  SALES_MANAGER: "SALES_MANAGER",
  TELESALES_AGENT: "TELESALES_AGENT",
  RETURN_SPECIALIST: "RETURN_SPECIALIST",
  COMMUNITY_SUPPORT_LEAD: "COMMUNITY_SUPPORT_LEAD",
  COMMUNITY_SUPPORT_AGENT: "COMMUNITY_SUPPORT_AGENT",
  GROWTH_MANAGER: "GROWTH_MANAGER",
  ACTIVATION_SUPERVISOR: "ACTIVATION_SUPERVISOR",
  ACTIVATION_AGENT: "ACTIVATION_AGENT",
  LAST_MILE_SUPERVISOR: "LAST_MILE_SUPERVISOR",
  COMPLIANCE_MANAGER: "COMPLIANCE_MANAGER",
  HR_MANAGER: "HR_MANAGER",
  MERCHANT_ENGAGEMENT_AGENT: "MERCHANT_ENGAGEMENT_AGENT",
  TKA_ACTIVATION_AGENT: "TKA_ACTIVATION_AGENT",
  ACTIVATION_OPERATIONS: "ACTIVATION_OPERATIONS",
  CUSTOMER_SUPPORT_SUPERVISOR: "CUSTOMER_SUPPORT_SUPERVISOR",
  WAREHOUSE_LOADING_SPECIALIST: "WAREHOUSE_LOADING_SPECIALIST",
};

export const USER_TYPE_ID = {
  ADMIN: 1,
  SALES_AGENT: 2,
  CUSTOMER: 3,
  DELIVERY_AGENT: 4,
  WAREHOUSE_MANAGER: 5,
  PURCHASING_MANAGER: 6,
  ACCOUNTING_AGENT: 7,
  OPERATIONS_MANAGER: 8,
  SALES_MANAGER: 9,
  TELESALES_AGENT: 10,
  RETURN_SPECIALIST: 11,
  COMMUNITY_SUPPORT_LEAD: 12,
  COMMUNITY_SUPPORT_AGENT: 13,
  GROWTH_MANAGER: 14,
  ACTIVATION_SUPERVISOR: 15,
  ACTIVATION_AGENT: 16,
  ACTIVATION_OPERATIONS: 17,
  WAREHOUSE_ASSISTANT: 18,
  COMPLIANCE_MANAGER: 19,
  HR_MANAGER: 20,
  MERCHANT_ENGAGEMENT_AGENT: 21,
  TKA_ACTIVATION_AGENT: 22,
  ACCOUNTING_MANAGER: 23,
  CUSTOMER_SUPPORT_SUPERVISOR: 24,
  WAREHOUSE_LOADING_SPECIALIST: 26,
  WAREHOUSE_RETURN_SPECIALIST: 11,
  WAREHOUSE_PICKING_SPECIALIST: 27,
};

export const DISCOUNT_TYPE_ID = {
  PERCENTAGE: 1,
  FIXED_AMOUNT: 2,
};

export const COMPANY_TYPE = {
  SUPPLIER: "SUPPLIER",
  BUYER: "BUYER",
};

export const STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
};

export const DISCOUNT_TYPE = {
  PERCENTAGE: "%",
  FIXED_AMOUNT: "EGP",
};
export const DISCOUNT_NAMES = [
  {
    id: 1,
    name: "PERCENTAGE",
  },
  {
    id: 2,
    name: "FIXED",
  },
];
export const ORDER_AMOUNT_OPERATOR = [
  { id: 1, name: "GREATER_THAN_THRESHOLD" },
];
export const ORDER_TRIGGERS_AMOUNT_OPERATORS = [
  { id: 1, name: "EQUAL" },
  { id: 2, name: "GREATER_THAN_OR_EQUAL" },
];
export const CURRENCY = {
  EGP: "EGP",
};

export const ORDER_SOURCE = {
  SALES_TEAM: "Sales Team",
  MARKET_PLACE: "Marketplace",
};
export const ORDER_STATUS_LIST = {
  REQUESTED: "REQUESTED",
  CANCELLED: "CANCELED",
  SHIPPING: "SHIPPING",
  DELIVERED: "DELIVERED",
  READY_FOR_PICKUP: "READY_FOR_PICKUP",
  DELIVERED_PARTIALLY: "DELIVERED_PARTIALLY",
  RETURNED: "RETURNED",
  RESCHEDULED: "RESCHEDULED",
  PENDING_ACTION: "PENDING_ACTION",
};

export const DELIVERY_DISPATCHER_ORDER_STATUS_LIST = [
  { id: 1, name: ORDER_STATUS_LIST.REQUESTED },
  { id: 2, name: ORDER_STATUS_LIST.READY_FOR_PICKUP },
];

export const RETURN_SPECIALIST_ORDER_STATUS_LIST = [
  { id: 1, name: ORDER_STATUS_LIST.SHIPPING },
  { id: 2, name: ORDER_STATUS_LIST.DELIVERED },
  { id: 3, name: ORDER_STATUS_LIST.DELIVERED_PARTIALLY },
  { id: 4, name: ORDER_STATUS_LIST.CANCELLED },
];

export const RUNSHEET_STATUS_LIST = {
  CREATED: "CREATED",
  ASSIGNED: "ASSIGNED",
  SHIPPING: "SHIPPING",
  PENDING_RETURNS: "PENDING_RETURNS",
  PENDING_ACCOUNTING: "PENDING_ACCOUNTING",
  DONE: "DONE",
};

export const GENERAL_STATUS_LIST = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
};

export const WALLET_PURPOSES = {
  COMPENSATION: "COMPENSATION",
  ACTIVATION: "ACTIVATION",
  RETENTION: "RETENTION",
  GENERAL_INCENTIVE: "GENERAL_INCENTIVE",
  CASHBACK: "CASHBACK",
  RE_ACTIVATION: "RE_ACTIVATION",
  RE_ENGAGEMENT: "RE_ENGAGEMENT",
  CREDIT_PAYMENT: "CREDIT_PAYMENT",
};

export const PRICING_STATUS_FILTERS = [
  {
    id: 1,
    name: GENERAL_STATUS_LIST.SUCCESS,
  },
  {
    id: 2,
    name: GENERAL_STATUS_LIST.FAILED,
  },
  {
    id: 3,
    name: GENERAL_STATUS_LIST.IN_PROGRESS,
  },
];
export const ACCOUNTING_STATUS = [
  {
    id: 1,
    name: "Pending",
    value: "pending",
  },
  {
    id: 2,
    name: "Deposited",
    value: "deposited",
  },
];
/** Accounting WRC status option list */
export const ACCOUNTING_WRC_STATUS_LIST = [
  {
    id: 1,
    name: "Pending",
    value: false,
  },
  {
    id: 2,
    name: "Deposited",
    value: true,
  },
];

/** accounting wrc status value  */
export const ACCOUNTING_WRC_STATUS = {
  PENDING: 1,
  DEPOSITED: 2,
};

/** accounting runsheet status */
export const ACCOUNTING_RUNSHEET_STATUS = [
  {
    id: 1,
    name: "SHIPPING",
    value: "SHIPPING",
  },
  {
    id: 2,
    name: "PENDING_RETURNS",
    value: "PENDING_RETURNS",
  },
  {
    id: 3,
    name: "PENDING_ACCOUNTING",
    value: "PENDING_ACCOUNTING",
  },
  {
    id: 4,
    name: "DONE",
    value: "DONE",
  },
];
/**
 * accounting runsheet order issues
 */
export const ACCOUNTING_ISSUE_LIST = [
  {
    id: 1,
    name: "Tech Bug",
    value: "tech-Bug",
  },
  {
    id: 2,
    name: "DA App issue (حاول تجرب تاني)",
    value: "da-app-issue",
  },
  {
    id: 3,
    name: "Test Order",
    value: "test-order",
  },
];

export const ACCOUNTING_REASON = [
  {
    id: 1,
    name: "Cash Deficit for Delivery Agent",
    value: "reason-1",
  },
  {
    id: 2,
    name: "Cash Deficit from Accountant",
    value: "reason-2",
  },
  {
    id: 3,
    name: "Delivered in reality, marked partially delivered on app",
    value: "reason-3",
  },
  {
    id: 4,
    name: "Delivered in reality, marked returned on app",
    value: "reason-4",
  },
  {
    id: 5,
    name: "Partially Delivered in reality, marked Delivered on app",
    value: "reason-5",
  },
  {
    id: 6,
    name: "Partially Delivered in reality , marked Returned on app",
    value: "reason-6",
  },
  {
    id: 7,
    name: "Returned in reality, marked Delivered on app",
    value: "reason-7",
  },
  {
    id: 8,
    name: "Returned in reality, market Partially Delivered on app",
    value: "reason-8",
  },
];

/** Monitor sales visit status */
export const MONITOR_SALES_STATUS = [
  {
    id: 1,
    name: "VISITED",
    value: "VISITED",
  },
  {
    id: 2,
    name: "UNVISITED",
    value: "UNVISITED",
  },
];
/** Monitor sales visit type */
export const VISIT_TYPE_LIST = [
  {
    id: 1,
    name: "PHONECALL",
  },
  {
    id: 2,
    name: "INPERSON",
  },
];

export const TARGET_SEGMENTS = [
  {
    id: 1,
    name: "BUYERS",
  },
  {
    id: 2,
    name: "SALES_AGENTS",
  },
];
export const PURPOSES = [
  {
    id: 1,
    name: "COMMISSION_BASED",
  },
  {
    id: 2,
    name: "CUSTOMER_SATISFACTION",
  },
  {
    id: 3,
    name: "INCENTIVE",
  },
  {
    id: 4,
    name: "RETENTION",
  },
  {
    id: 5,
    name: "RE_ENGAGEMENT",
  },
  {
    id: 6,
    name: "ACTIVATION",
  },
  {
    id: 7,
    name: "RE_ACTIVATION",
  },
];
export const PROMOTION_SOURCE_TYPES = [
  {
    id: 1,
    name: "ORDER",
  },
  {
    id: 2,
    name: "WALLET_RECHARGE",
  },
];

export const PROMOTION_TRIGGERS_MENU = [
  {
    id: 1,
    name: "Number of orders",
    isSelected: false,
    triggerType: "NUMBER_OF_ORDERS",
  },
  {
    id: 2,
    name: "Bundle Categories",
    isSelected: false,
    triggerType: "BUNDLE_CATEGORIES",
  },
  {
    id: 3,
    name: "Bundle Brands",
    isSelected: false,
    triggerType: "BUNDLE_BRANDS",
  },
  {
    id: 4,
    name: "Bundle Items",
    isSelected: false,
    triggerType: "BUNDLE_PRODUCTS",
  },
  {
    id: 5,
    name: "Bundle Manufacturers",
    isSelected: false,
    triggerType: "BUNDLE_MANUFACTURES",
  },
];
export const TRIGGERS_TYPE = {
  BUNDLE_PRODUCTS: "BUNDLE_PRODUCTS",
  BUNDLE_MANUFACTURES: "BUNDLE_MANUFACTURES",
  NUMBER_OF_ORDERS: "NUMBER_OF_ORDERS",
  BUNDLE_CATEGORIES: "BUNDLE_CATEGORIES",
  BUNDLE_BRANDS: "BUNDLE_BRANDS",
};

export const PROMOTION_INCENTIVE_MENU = [
  {
    id: 1,
    name: "Order Discount",
    isSelected: false,
    triggerType: "ORDER_DISCOUNT",
  },
  {
    id: 2,
    name: "Cashback",
    isSelected: false,
    triggerType: "CASHBACK",
  },
];
export const INCENTIVE_TYPE = {
  ORDER_DISCOUNT: "ORDER_DISCOUNT",
  CASHBACK: "CASHBACK",
};
export const DISCOUNT_TYPES = [
  { id: 1, name: "Order amount percentage", value: "ORDER_AMOUNT_PERCENTAGE" },
  { id: 2, name: "Number of items", value: "NUMBER_OF_ITEMS" },
];

export const TRUE_FALSE_OPTIONS = [
  { id: 1, name: "true", value: true },
  { id: 2, name: "false", value: false },
];

export const DAMAGE_SOURCES = [
  { id: 1, name: "WAREHOUSE" },
  { id: 2, name: "RETURNS" },
];

export const WALLET_RECHARGE_OUTCOME_LIST = [
  {
    id: 1,
    name: "PENDING",
  },
  {
    id: 2,
    name: "CANCELLED",
  },
  {
    id: 3,
    name: "SUCCESS",
  },
];

export const REWARD_CYCLES = [
  {
    id: 1,
    code: "STARTS_AT_1",
    name: "Start 1st (1 Month/ End 28,29,30 or 31)",
    cycleStartDate: 1,
  },
  {
    id: 2,
    code: "STARTS_AT_8",
    name: "Start 8th (1 Month/ End 7th next Month)",
    cycleStartDate: 8,
  },
  {
    id: 3,
    code: "STARTS_AT_15",
    name: "Start 15th (1 Month/ End 14th next Month)",
    cycleStartDate: 15,
  },
  {
    id: 4,
    code: "STARTS_AT_22",
    name: "Start 22nd (1 Month/ End 21st next Month)",
    cycleStartDate: 22,
  },
];
export const REWARD_PURPOSES = [
  {
    id: 1,
    name: "RETENTION",
  },
  {
    id: 2,
    name: "ACTIVATION",
  },
];
export const TELECOM_OUTCOME_LIST = [
  {
    id: 1,
    name: "INFO",
  },
  {
    id: 2,
    name: "ERROR",
  },
];
export const ACTIVE_BOOLEAN_STATUS_LIST = [
  { id: 1, name: "Active", value: true },
  { id: 2, name: "Inactive", value: false },
];

export const VEHICLE_MAKES = [
  {
    id: 1,
    name: "Default",
  },
  {
    id: 2,
    name: "Custom",
  },
];
export const DELIVERY_DISPATCHER_SLOTS = [
  {
    id: 1,
    name: "MORNING",
  },
  {
    id: 2,
    name: "AFTERNOON",
  },
];

export const SECTIONS_TYPES = {
  LINK: "LINK",
  LIST: "LIST",
};
export const SALES_AGENTS_FEATURES = [
  {
    id: 1,
    name: "Add new merchants",
    value: "canAcquireBuyer",
  },
  {
    id: 2,
    name: "wallet recharge",
    value: "canCollectWalletRecharge",
  },
  {
    id: 3,
    name: "Global search",
    value: "canSearchGlobally",
  },
  {
    id: 4,
    name: "Can Create Order",
    value: "canCreateOrder",
  },
];
export const ENABLED_DISABLED_OPTIONS = [
  {
    id: 1,
    name: "Enabled",
    value: true,
  },
  {
    id: 2,
    name: "Disabled",
    value: false,
  },
];

export const CALL_TO_ACTION_OPTIONS = {
  Product: 1,
  Search: 2,
  Brand: 3,
  Category: 4,
  Sub_category: 5,
  Bundle: 6,
};

export const RETURNS_SPECIALIST_RUNSHEET_STATUS_LIST = {
  PENDING_RETURNS: "PENDING_RETURNS",
  PENDING_ACCOUNTING: "PENDING_ACCOUNTING",
  SHIPPING: "SHIPPING",
  DONE: "DONE",
};
export const REASONS_LIST_TYPES = {
  CANCEL_ORDER: "CANCEL_ORDER",
  ACCOUNTANT_CASH_ADJUSTMENT: "ACCOUNTANT_CASH_ADJUSTMENT",
};

export const BUYER_STATUS = {
  UNVERIFIED: "UNVERIFIED",
  PENDING_VERIFICATION: "PENDING_VERIFICATION",
  IN_PROGRESS: "IN_PROGRESS",
  VERIFIED: "VERIFIED",
};

export const BUYER_STATUS_LIST = [
  {
    id: 1,
    name: BUYER_STATUS.UNVERIFIED,
  },
  {
    id: 2,
    name: BUYER_STATUS.PENDING_VERIFICATION,
  },
  {
    id: 3,
    name: BUYER_STATUS.IN_PROGRESS,
  },
  {
    id: 4,
    name: BUYER_STATUS.VERIFIED,
  },
];

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum DELIVERY_DAYS {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FIRDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
}

export const DELIVERY_DAYS_LIST = [
  {
    name: "Sunday",
    value: DELIVERY_DAYS.SUNDAY,
  },
  {
    name: "Monday",
    value: DELIVERY_DAYS.MONDAY,
  },
  {
    name: "Tuesday",
    value: DELIVERY_DAYS.TUESDAY,
  },
  {
    name: "Wednesday",
    value: DELIVERY_DAYS.WEDNESDAY,
  },
  {
    name: "Thursday",
    value: DELIVERY_DAYS.THURSDAY,
  },
  {
    name: "Friday",
    value: DELIVERY_DAYS.FIRDAY,
  },
  {
    name: "Saturday",
    value: DELIVERY_DAYS.SATURDAY,
  },
];

export const LOADING_RUNSHEET_STATUS_LIST = [
  { name: "NOT_STARTED", value: "NOT_STARTED" },
  { name: "STARTED", value: "STARTED" },
  { name: "LOADED", value: "LOADED" },
];

export const SUPPLIER_FILTER_TYPES = [
  { id: 1, name: "Partner", value: "partner" },
  { id: 4, name: "Third Party", value: "third-party" },
];

export const BUYER_DISCOUNT_TYPES = {
  PERCENTAGE: "PERCENTAGE",
  FIXED: "FIXED",
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum BUYER_KYC_DELIVERY_SLOTS {
  MORNING = "MORNING",
  AFTERNOON = "AFTERNOON",
  EVENING = "EVENING",
}

export const BUYER_KYC_DELIVERY_SLOTS_LIST = [
  { name: "10AM - 12PM", value: BUYER_KYC_DELIVERY_SLOTS.MORNING },
  { name: "12 - 4PM", value: BUYER_KYC_DELIVERY_SLOTS.AFTERNOON },
  { name: "4 - 10PM", value: BUYER_KYC_DELIVERY_SLOTS.EVENING },
];

export const BUYER_KYC_KNOW_CAPITER = {
  ADS: "ADS",
  SOCIAL_MEDIA: "SOCIAL_MEDIA",
  SALES: "SALES",
  COLLEAGUE: "COLLEAGUE",
  OTHER: "OTHER",
};

export const BUYER_KYC_KNOW_CAPITER_LIST = [
  { name: "Ads", value: BUYER_KYC_KNOW_CAPITER.ADS },
  { name: "Social Media", value: BUYER_KYC_KNOW_CAPITER.SOCIAL_MEDIA },
  { name: "Sales", value: BUYER_KYC_KNOW_CAPITER.SALES },
  { name: "Colleuge / زميل", value: BUYER_KYC_KNOW_CAPITER.COLLEAGUE },
  { name: "Other", value: BUYER_KYC_KNOW_CAPITER.OTHER },
];

export const VISIT_FEEDBACK_LIST = [
  { name: "Telesales", value: "TELESALES_AGENT" },
  { name: "On-ground sales", value: "SALES_AGENT" },
];
