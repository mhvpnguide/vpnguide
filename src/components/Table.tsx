
// Define the interface for the key_data object
interface KeyData {
  id: number;
  data_cap: string;
  download_speed: string;
  logging_policy: string;
  data_leaks: boolean;
  jurisdiction: string;
  servers: string;
  ip_address: string;
  countries_with_servers: string;
  us_netflix: boolean;
  torrenting: string;
  simultaneous_connections: string;
  works_in_china: boolean;
  support: string;
  cheapest_price: string;
  free_trial: string;
  money_back_gurantee: string;
}

// Define the props interface
interface KeyDataProps {
  keyData: KeyData;
}

const CustomTable: React.FC<KeyDataProps> = ({ keyData }) => {
  return (
    <div className="overflow-hidden rounded-lg border-2 border-primary-50">
      <table className="min-w-full ">
        <tbody>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Data Cap</td>
            <td className="p-2">{keyData.data_cap}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Download Speed</td>
            <td className="p-2">{keyData.download_speed}Mbps</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Logging Policy</td>
            <td className="p-2">{keyData.logging_policy}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Data Leaks</td>
            <td className="p-2">{keyData.data_leaks ? "Yes":"No"}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Jurisdiction</td>
            <td className="p-2">{keyData.jurisdiction}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Servers</td>
            <td className="p-2">{keyData.servers}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">IP Adderess</td>
            <td className="p-2">{keyData.ip_address}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Countries With Servers</td>
            <td className="p-2">{keyData.countries_with_servers}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">US Netflix</td>
            <td className="p-2">{keyData.us_netflix ? "Yes":"No"}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Torrenting</td>
            <td className="p-2">{keyData.torrenting}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Simultaneous Connection</td>
            <td className="p-2">{keyData.simultaneous_connections}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Works in China</td>
            <td className="p-2">{keyData.works_in_china ? "Yes":"No"}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Support</td>
            <td className="p-2">{keyData.support}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Cheapest Price</td>
            <td className="p-2">{keyData.cheapest_price}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Free Trial</td>
            <td className="p-2">{keyData.free_trial}</td>
          </tr>
          <tr className="odd:bg-primary-50 even:bg-white">
            <td className="p-2 w-[40%] font-semibold">Money Back Gurantee</td>
            <td className="p-2">{keyData.money_back_gurantee}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
