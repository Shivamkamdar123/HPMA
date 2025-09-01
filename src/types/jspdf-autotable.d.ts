import "jspdf";


declare module "jspdf" {
    interface jsPDF {
        autoTable: (options: any) => jsPDF;
    }
}
declare module "jspdf-autotable";