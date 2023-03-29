// Lấy các phần tử trên trang web bằng ID
const numberListInput = document.getElementById("numberList");
const functionSelect = document.getElementById("functionSelect");
const resultArea = document.getElementById("resultArea");

// Bắt sự kiện khi người dùng submit form
document.querySelector("form").addEventListener("submit", function(event) {
	event.preventDefault(); // Ngăn chặn trang web tự động load lại khi submit form

	// Lấy danh sách số nguyên từ input và chuyển thành mảng
	const numberList = numberListInput.value.trim().split(",").map(Number);

	// Xử lý chức năng được chọn
	switch (functionSelect.value) {
		case "1": // Tổng các số dương trong mảng
			const sumPositiveNumbers = numberList.reduce((acc, cur) => acc + (cur > 0 ? cur : 0), 0);
			resultArea.value = `Tổng các số dương trong mảng: ${sumPositiveNumbers}`;
			break;
		case "2": // Đếm có bao nhiêu số dương trong mảng
			const countPositiveNumbers = numberList.filter(x => x > 0).length;
			resultArea.value = `Số lượng số dương trong mảng: ${countPositiveNumbers}`;
			break;
		case "3": // Tìm số nhỏ nhất trong mảng
			const minNumber = Math.min(...numberList);
			resultArea.value = `Số nhỏ nhất trong mảng: ${minNumber}`;
			break;
		case "4": // Tìm số dương nhỏ nhất trong mảng
			const minPositiveNumber = Math.min(...numberList.filter(x => x > 0));
			resultArea.value = minPositiveNumber ? `Số dương nhỏ nhất trong mảng: ${minPositiveNumber}` : "Không có số dương trong mảng";
			break;
		case "5": // Tìm số chẵn cuối cùng trong mảng
			const lastEvenNumber = numberList.filter(x => x % 2 === 0).pop();
			resultArea.value = lastEvenNumber !== undefined ? `Số chẵn cuối cùng trong mảng: ${lastEvenNumber}` : -1;
			break;
		case "6": // Đổi chỗ 2 giá trị trong mảng theo vị trí
			const swapPositions = prompt("Nhập 2 vị trí muốn đổi chỗ, cách nhau bằng dấu phẩy (VD: 1, 2)").split(",").map(Number);
			if (swapPositions.length !== 2 || swapPositions.some(x => x < 1 || x > numberList.length)) {
				resultArea.value = "Vị trí không hợp lệ";
			} else {
				[numberList[swapPositions[0] - 1], numberList[swapPositions[1] - 1]] = [numberList[swapPositions[1] - 1], numberList[swapPositions[0] - 1]];
				resultArea.value = `Mảng sau khi đổi chỗ: ${numberList}`;
			}
			break;
		case "7": // Sắp xếp mảng theo thứ tự tăng dần
        numberList.sort((a, b) => a - b);
        resultArea.value = `Mảng sau khi sắp xếp:${numberList}`;
        break;
        case "8": // Tìm số nguyên tố đầu tiên trong mảng
        const isPrime = num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
        }
        return true;
        };
        const firstPrimeNumber = numberList.find(isPrime);
        resultArea.value = firstPrimeNumber !== undefined ? `Số nguyên tố đầu tiên trong mảng:${firstPrimeNumber}`: -1;
        break;
        case "9": // Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
        const floatList = prompt("Nhập mảng số thực, cách nhau bằng dấu phẩy (VD: 1.5, 2.7, 3)").trim().split(",").map(Number);
        const intCount = floatList.filter(x => Number.isInteger(x)).length;
        resultArea.value = `Số lượng số nguyên trong mảng: ${intCount}`;
        break;
        case "10": // So sánh số lượng số dương và số lượng số âm
        const positiveCount = numberList.filter(x => x > 0).length;
        const negativeCount = numberList.filter(x => x < 0).length;
        if (positiveCount > negativeCount) {
        resultArea.value = "Số lượng số dương nhiều hơn số lượng số âm";
        } else if (positiveCount < negativeCount) {
        resultArea.value = "Số lượng số âm nhiều hơn số lượng số dương";
        } else {
        resultArea.value = "Số lượng số dương và số lượng số âm bằng nhau";
        }
        break;
        default:
        resultArea.value = "Chưa chọn chức năng";
        }
        });
