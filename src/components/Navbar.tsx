const Navbar = () => {
  return (
    <div className="flex justify-center py-6 border-b-2 border-black-500">
      <div className="absolute left-14">
        <h1 className="">Snap Car Updates</h1>
      </div>
      <div className="flex space-x-8">
        <h3 className="dark:white hover:text-custom-light-purple cursor-pointer">About</h3>
        <h3 className="dark:white hover:text-custom-light-purple cursor-pointer">Pricing</h3>
        <h3 className="dark:white hover:text-custom-light-purple cursor-pointer">Testimonials</h3>
      </div>
      <div className="absolute right-14 space-x-8">
        <button className="dark:text-white hover:text-custom-light-purple dark:hover:text-custom-light-purple">Login</button>
        <button className="bg-custom-purple hover:bg-custom-light-purple border-0 text-white">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
