function NavBar() {
  return (
    <div className="w-full h-20 bg-gray-100 px-30 flex justify-between items-center">
      <div className="flex-1 gap-5">
        <div>Logo</div>
        <div>Students</div>
        <div>Enterprise</div>
      </div>
      <div>
        <div className="bg-blue rounded">SignIN</div>
      </div>
    </div>
  );
}

export default NavBar;
