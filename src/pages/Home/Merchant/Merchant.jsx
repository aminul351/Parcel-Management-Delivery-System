import merchantImg1 from '../../../assets/be-a-merchant-bg.png'
import merchantImg2 from '../../../assets/location-merchant.png'
const Merchant = () => {
    return (
        <div className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] text-white min-h-screen">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    <img
      src={merchantImg2}
      className="max-w-sm rounded-lg "
    />
    <div>
      <h1 className="text-5xl pt-32 font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6">
        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
      <div className="flex gap-4">
        <button className="btn hover:bg-[#B8DB4F] rounded-full">Become a Merchant</button>
      <button className="btn hover:bg-[#B8DB4F] rounded-full">Earn with ZapShift Courier</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Merchant;