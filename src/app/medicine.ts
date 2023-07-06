  export interface MedicineData {
    isEdit: boolean;
  
    medicineId: number;
    medicine_name: string;
    medicine_description: string;
    medicine_price: number;
    medicine_quantity: number;
    generic_name: string;
    
  }

  export interface MedicineUpdateData {
    
    medicineId: number;
    medicineName: string;
    medicineDescription: string;
    medicinePrice: number;
    medicineQuantity: number;
    genericName: string;
    
  }