export default function EmailVerification() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Email Verification Required</h1>
        <p className="text-gray-700 mb-4">
          Thank you for creating an account with us! Please check your Gmail
          inbox to verify your account.
        </p>
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Gmail
        </a>
      </div>
    </div>
  )
}
