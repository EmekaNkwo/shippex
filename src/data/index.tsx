import { Ezzat, Saeed } from "../assets";
import { IParcelDetails } from "../model";

export const ParcelData: IParcelDetails = {
  id: 1,
  parcelId: "4515645646466",
  updatedAt: "16/12/2023, 11:33 AM",
  senderName: "Mohamamd Manaa",
  consigneeName: "Beshouy Ezzat",
  originAddress: "Ahmed Hassan, 25, Nile Street, Zamalek,Cairo, Egypt",
  destinationAddress: "Fatima Ali, 10, Corniche Road, Gleem, Alexandria, Egypt",
  shippingService: "Express Service",
  totalCost: "499.55 EGP",
  timeline: [
    {
      status: "created",
      date: "Dec 16, 2023",
      time: "12:05PM",
      title: "Shipment created",
      description: "Shipment Description",
      avatar: Saeed,
      name: "Abdo Saeed",
    },
    {
      status: "picked up",
      date: "Dec 16, 2023",
      time: "14:05PM",
      title: "Shipment picked-up",
      avatar: Ezzat,
      name: "Beshouy Ezzat",
    },
    {
      status: "pending delivery",
      date: "Dec 16, 2023",
      time: "14:08PM",
      title: "Proof of pick-up",
      description: "Proof of pick-up description",
      avatar: Saeed,
      name: "James Collins",
    },
    {
      status: "on delivery",
      date: "Dec 16, 2023",
      time: "12:05PM",
      title: "Shipment on delivery",
      description: "Description goes here",
    },
  ],
};

export const mainData = {
  name: "210173099796",
  owner: "omar.sherif@smsaexpress.com",
  creation: "2024-01-10 17:16:32.310832",
  modified: "2024-02-05 15:45:05.201574",
  modified_by: "Administrator",
  docstatus: 1,
  idx: 0,
  sender: "EG0215",
  sender_address: null,
  origin_state: "ALEXANDRIA",
  origin_address_line2: null,
  sender_name: "MCV",
  origin_area: null,
  origin_country: "Egypt",
  sender_phone: null,
  origin_city: "ALEXANDRIA",
  origin_address_line_1: null,
  consignee: "Default Consignee",
  consignee_address: null,
  destination_state: "CAIRO",
  destination_address_line_2: null,
  consignee_name: null,
  destination_area: null,
  destination_country: "Egypt",
  consignee_phone: null,
  destination_city: "CAIRO",
  destination_address_line_1: null,
  geolocation_evkp: null,
  origin_zone: "Dom 2",
  destination_zone: "Dom 1",
  destination_branch: null,
  origin_branch: null,
  branch: null,
  shipping_service: "Domestic - Corporate",
  service_type: null,
  total_weight: 0.5,
  status: "New ShipmentTT",
  movable_units: null,
  barcode: "210173099796",
  amended_from: null,
  type: null,
  movable_unit: "",
  delivery_time: null,
  delivery_due_date: null,
  posting_date: "2023-12-31",
  posting_time: "17:08:53.695224",
  company: "SMSA EXPRESS",
  company_currency: "EGP",
  cod: 0.0,
  total_cod: 0.0,
  currency: "EGP",
  exchange_rate: 1.0,
  pieces: 1,
  awb_date: "2023-12-27",
  custodian_commission: 0.0,
  overdue: 0,
  is_returned: 0,
  closed: 0,
  awb_terms_template: null,
  awb_terms_and_conditions: null,
  custodian: null,
  assignee: null,
  doctype: "AWB",
  fulfillment_service_items: [],
  fees: [
    {
      name: 318091,
      owner: "omar.sherif@smsaexpress.com",
      creation: "2024-01-10 17:16:32.387403",
      modified: "2024-02-05 15:45:05.201574",
      modified_by: "Administrator",
      docstatus: 1,
      idx: 1,
      item_code: "POSTAL AGENCY CHARGES",
      item_name: "POSTAL AGENCY CHARGES",
      paying_party: "Sender",
      exchange_rate: 1.0,
      additional_condition_for_due_on: null,
      amount: 5.7,
      base_amount: 5.7,
      original_amount: 5.7,
      billed_amt: 1.0,
      due_on: null,
      parent: "210173099796",
      parentfield: "fees",
      parenttype: "AWB",
      doctype: "AWB Fee",
    },
    {
      name: 318092,
      owner: "omar.sherif@smsaexpress.com",
      creation: "2024-01-10 17:16:32.387880",
      modified: "2024-02-05 15:45:05.201574",
      modified_by: "Administrator",
      docstatus: 1,
      idx: 2,
      item_code: "Fuel",
      item_name: "Fuel",
      paying_party: "Sender",
      exchange_rate: 1.0,
      additional_condition_for_due_on: null,
      amount: 5.181818182,
      base_amount: 5.181818182,
      original_amount: 5.181818182,
      billed_amt: 1.0,
      due_on: null,
      parent: "210173099796",
      parentfield: "fees",
      parenttype: "AWB",
      doctype: "AWB Fee",
    },
    {
      name: 318093,
      owner: "omar.sherif@smsaexpress.com",
      creation: "2024-01-10 17:16:32.388348",
      modified: "2024-02-05 15:45:05.201574",
      modified_by: "Administrator",
      docstatus: 1,
      idx: 3,
      item_code: "DOMESTIC CHARGE EXP PARCEL",
      item_name: "DOMESTIC CHARGE EXP PARCEL",
      paying_party: "Sender",
      exchange_rate: 1.0,
      additional_condition_for_due_on: null,
      amount: 51.818181818,
      base_amount: 51.818181818,
      original_amount: 51.818181818,
      billed_amt: 1.0,
      due_on: null,
      parent: "210173099796",
      parentfield: "fees",
      parenttype: "AWB",
      doctype: "AWB Fee",
    },
  ],
  shipment_items: [],
  scans: [
    {
      name: 101579,
      owner: "omar.sherif@smsaexpress.com",
      creation: "2024-01-10 17:16:32.310832",
      modified: "2024-02-05 15:45:05.201574",
      modified_by: "Administrator",
      docstatus: 1,
      idx: 1,
      created_on: "2024-01-10 17:16:32.384905",
      scan_comment: null,
      added_by: "omar.sherif@smsaexpress.com",
      scan_date: "2023-12-27 00:00:00",
      scan: "'Proof of Pick-up(PUP)",
      parent: "210173099796",
      parentfield: "scans",
      parenttype: "AWB",
      doctype: "AWB Scan",
    },
    {
      name: 106627,
      owner: "ahmed.barakat@brandimic.com",
      creation: "2024-01-10 17:16:32.310832",
      modified: "2024-02-05 15:45:05.201574",
      modified_by: "Administrator",
      docstatus: 1,
      idx: 2,
      created_on: "2024-01-27 16:20:58.673366",
      scan_comment: "Hihi",
      added_by: "ahmed.barakat@brandimic.com",
      scan_date: "2024-01-27 16:20:58.673391",
      scan: "'Proof of Pick-up(PUP)",
      parent: "210173099796",
      parentfield: "scans",
      parenttype: "AWB",
      doctype: "AWB Scan",
    },
    {
      name: 106641,
      owner: "s7saway@brandimic.com",
      creation: "2024-01-10 17:16:32.310832",
      modified: "2024-02-05 15:45:05.201574",
      modified_by: "Administrator",
      docstatus: 1,
      idx: 3,
      created_on: "2024-01-31 12:42:46.589982",
      scan_comment: "A",
      added_by: "s7saway@brandimic.com",
      scan_date: "2024-01-31 12:42:46.590006",
      scan: "'Proof of Pick-up(PUP)",
      parent: "210173099796",
      parentfield: "scans",
      parenttype: "AWB",
      doctype: "AWB Scan",
    },
    {
      name: 106642,
      owner: "Administrator",
      creation: "2024-01-10 17:16:32.310832",
      modified: "2024-02-05 15:45:05.201574",
      modified_by: "Administrator",
      docstatus: 1,
      idx: 4,
      created_on: "2024-02-05 12:50:01.500805",
      scan_comment: null,
      added_by: "Administrator",
      scan_date: "2024-02-05 12:50:01.500848",
      scan: "PUP",
      parent: "210173099796",
      parentfield: "scans",
      parenttype: "AWB",
      doctype: "AWB Scan",
    },
    {
      name: 106647,
      owner: "Administrator",
      creation: "2024-01-10 17:16:32.310832",
      modified: "2024-02-05 15:45:05.201574",
      modified_by: "Administrator",
      docstatus: 1,
      idx: 5,
      created_on: "2024-02-05 15:39:26.270580",
      scan_comment: null,
      added_by: "Administrator",
      scan_date: "2024-02-05 15:39:26.270609",
      scan: "PUP",
      parent: "210173099796",
      parentfield: "scans",
      parenttype: "AWB",
      doctype: "AWB Scan",
    },
    {
      name: 106652,
      owner: "Administrator",
      creation: "2024-01-10 17:16:32.310832",
      modified: "2024-02-05 15:45:05.201574",
      modified_by: "Administrator",
      docstatus: 1,
      idx: 6,
      created_on: "2024-02-05 15:44:38.897025",
      scan_comment: null,
      added_by: "Administrator",
      scan_date: "2024-02-05 15:44:38.897055",
      scan: "PUP",
      parent: "210173099796",
      parentfield: "scans",
      parenttype: "AWB",
      doctype: "AWB Scan",
    },
    {
      name: 106653,
      owner: "Administrator",
      creation: "2024-01-10 17:16:32.310832",
      modified: "2024-02-05 15:45:05.201574",
      modified_by: "Administrator",
      docstatus: 1,
      idx: 7,
      created_on: "2024-02-05 15:45:04.775753",
      scan_comment: null,
      added_by: "Administrator",
      scan_date: "2024-02-05 15:45:04.775785",
      scan: "PUP",
      parent: "210173099796",
      parentfield: "scans",
      parenttype: "AWB",
      doctype: "AWB Scan",
    },
  ],
};
