import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../admin/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: '',
    color: '',
    type: '',
    height: '',
    width: '',
    cushion: '',
    quantity: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        toast.error('Product not found');
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/quotes', { ...formData, productId: id });
      toast.success('Quote request submitted successfully!');
      setFormData({
        name: '',
        number: '',
        message: '',
        color: '',
        type: '',
        height: '',
        width: '',
        cushion: '',
        quantity: '',
      });
    } catch (err) {
      toast.error('Failed to submit quote');
      console.error('Submit error:', err);
    }
  };

  if (!product) return <p className="text-center mt-10">Loading product details...</p>;

  return (
    <div className="mx-auto px-4 pt-20 pb-10 max-w-7xl">
      <ToastContainer position="top-right" />
      <div className="border bg-white shadow rounded mt-10 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={`https://pinaka-furnitureadmin.onrender.com${product.image}`}
              alt={product.productName}
              className="object-cover w-full h-[500px] rounded shadow"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-black">{product.productName}</h1>
            <p className="text-lg text-green-600 font-semibold">₹{product.price}</p>
            <p className='text-black'><strong>Material:</strong> {product.materialType}</p>
            <p className='text-black'><strong>Color:</strong> {product.color}</p>
            <p className='text-black'><strong>Size:</strong> {product.height} x {product.width}</p>
            <p className="text-gray-700"><strong>Description:</strong> {product.description}</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <h3 className="text-xl font-semibold mb-4 text-black">Customize Your Order</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['name', 'number', 'height', 'width', 'quantity'].map((field) => (
              <div className="flex flex-col space-y-1" key={field}>
                <label htmlFor={field} className="text-sm text-black capitalize">{field}</label>
                <input
                  id={field}
                  name={field}
                  type={field === 'number' || field === 'quantity' ? 'number' : 'text'}
                  placeholder={`Enter ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="bg-white text-black px-3 py-2 rounded border border-gray-300"
                />
              </div>
            ))}

            <div className="flex flex-col space-y-1">
              <label htmlFor="color" className="text-sm text-black">Color</label>
              <select
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="bg-white text-black px-3 py-2 rounded border border-gray-300"
              >
                <option value="">Select color</option>
                <option value="walnut">Walnut</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="grey">Grey</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="type" className="text-sm text-black">Type</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="bg-white text-black px-3 py-2 rounded border border-gray-300"
              >
                <option value="">Select type</option>
                <option value="bar-stool">Bar Stool</option>
                <option value="dining-chair">Dining Chair</option>
                <option value="booth">Booth</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="cushion" className="text-sm text-black">Cushion</label>
              <select
                id="cushion"
                name="cushion"
                value={formData.cushion}
                onChange={handleChange}
                className="bg-white text-black px-3 py-2 rounded border border-gray-300"
              >
                <option value="">Select cushion</option>
                <option value="with">With Cushion</option>
                <option value="without">Without Cushion</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1 md:col-span-2">
              <label htmlFor="message" className="text-sm text-black">Note / Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message or special instructions"
                value={formData.message}
                onChange={handleChange}
                className="bg-white text-black px-3 py-2 rounded border border-gray-300 resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#007580] hover:bg-[#2c4c4f] text-white px-6 py-3 rounded w-full"
          >
            Add To Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
