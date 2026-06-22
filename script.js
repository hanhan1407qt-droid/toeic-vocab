// ==========================================
// 1. KHO DỮ LIỆU TỪ VỰNG TOEIC TỐI ƯU ĐỘ DÀI
// ==========================================
const wordList = [
    { en: "ability", type: "n", ipa: "/abıl.ə.ti/", vi: "năng lực, khả năng" },
    { en: "abroad", type: "adv", ipa: "/ǝbra:d/", vi: "ở nước ngoài" },
    { en: "accept", type: "v", ipa: "/ǝk'sept/", vi: "chấp nhận, chấp thuận" },
    { en: "access", type: "n, v", ipa: "/'æk.ses/", vi: "quyền truy cập, sự tiếp cận; truy cập" },
    { en: "accessible", type: "adj", ipa: "/ək ses.ə.bǝl/", vi: "khả năng tiếp cận được" },
    { en: "accident", type: "n", ipa: "/'æk.sǝ.dənt/", vi: "tai nạn, sự tình cờ" },
    { en: "accommodate", type: "v", ipa: "/ə'ka..mə.deit/", vi: "dàn xếp, hỗ trợ" },
    { en: "accommodation", type: "n", ipa: "/ə ka: mə'deı fən/", vi: "chỗ ở, nơi ở, sự điều tiết, hòa giải" },
    { en: "accomplish", type: "v", ipa: "/aka:m.plıf/", vi: "hoàn thành, thực hiện" },
    { en: "according (to)", type: "prep", ipa: "/ə'kɔ:r.dın tu:/", vi: "theo như, dựa vào" },
    { en: "accordingly", type: "adv", ipa: "/ə'kɔ:r.dıŋ.li/", vi: "theo đó, vì vậy" },
    { en: "accounting", type: "n", ipa: "/ə'kaon.tın/", vi: "sự tính toán, thanh toán" },
    { en: "accurate", type: "adj", ipa: "/æk.jǝǝt/", vi: "đúng đắn, chính xác" },
    { en: "achieve", type: "v", ipa: "/ǝ'tfi:v/", vi: "đạt được, giành được" },
    { en: "acquire", type: "v", ipa: "/ə'kwaia/", vi: "thu nạp được, giành được" },
    { en: "act", type: "n, v", ipa: "/ækt/", vi: "hành động; thực hiện" },
    { en: "actually", type: "adv", ipa: "/æk.tfu.ǝ.li/", vi: "thực sự, trên thực tế" },
    { en: "adapt", type: "v", ipa: "/ǝdæpt/", vi: "nghiêng, thích ứng" },
    { en: "adapter", type: "n", ipa: "/ə'dæp.to/", vi: "thiết bị chuyển đổi, người điều chỉnh tác phẩm" },
    { en: "additional", type: "adj", ipa: "/ə'dı.ǝn.ǝl/", vi: "thêm vào, phụ thêm" },
    { en: "adjust", type: "v", ipa: "/a'dzast/", vi: "điều chỉnh" },
    { en: "adjustment", type: "n", ipa: "/ə'dzast.mənt/", vi: "sự điều chỉnh, sự thay đổi" },
    { en: "administration", type: "n", ipa: "/əd, mın.ǝ'streı fən/", vi: "sự quản lý, quản trị" },
    { en: "admire", type: "v", ipa: "/ǝd maır/", vi: "ngưỡng mộ, thán phục" },
    { en: "admit", type: "v", ipa: "/ǝd mit/", vi: "thừa nhận; tiếp nhận" },
    { en: "addmittance", type: "n", ipa: "/ǝd'mıt.ǝns/", vi: "sự thu nạp, đón nhận" },
    { en: "adopt", type: "v", ipa: "/ə'da:pt/", vi: "nhận nuôi, làm theo, áp dụng" },
    { en: "advance", type: "n, v", ipa: "/ǝd'væns/", vi: "sự tiến lên; tiến lên phía trước" },
    { en: "advanced", type: "adj", ipa: "/ǝd'vænst/", vi: "tiến bộ, cấp tiến" },
    { en: "advantage", type: "n", ipa: "/ǝd'væn.tidz/", vi: "lợi thế" },
    { en: "advantageous", type: "adj", ipa: "/æd.vænter.dzəs/", vi: "có lợi, thuận lợi" },
    { en: "advertise", type: "v", ipa: "/'æd.vo.taiz/", vi: "quảng cáo, thông báo" },
    { en: "advertisement", type: "n", ipa: "/æd.v3 : tarz.mənt/", vi: "bản tin quảng cáo" },
    { en: "advice", type: "n", ipa: "/ǝd'vais/", vi: "lời khuyên, lời chỉ bảo" },
    { en: "advise", type: "v", ipa: "/ǝd'vaiz/", vi: "đưa ra lời khuyên" },
    { en: "affect", type: "v", ipa: "/ǝfekt/", vi: "ảnh hưởng, tác động" },
    { en: "afford", type: "v", ipa: "/ǝ'ford/", vi: "có khả năng, đủ điều kiện" },
    { en: "affordable", type: "adj", ipa: "/əfər də bəl/", vi: "có khả năng chi trả, vừa túi tiền" },
    { en: "agency", type: "n", ipa: "/'er.dzən.si/", vi: "đại lý, bên môi giới trung gian" },
    { en: "agenda", type: "n", ipa: "/ə'dzen.dǝ/", vi: "chương trình nghị sự, kế hoạch" },
    { en: "agree", type: "v", ipa: "/ǝ'gri:/", vi: "đồng ý, tán thành" },
    { en: "agreeable", type: "adj", ipa: "/ə'tri.ə.bəl/", vi: "dễ chịu; thích hợp với" },
    { en: "agreement", type: "n", ipa: "/ǝ'gri:.mənt/", vi: "hợp đồng, giao kèo" },
    { en: "agricultural", type: "adj", ipa: "/æg.rə kal.tfǝǝl/", vi: "(thuộc) nông nghiệp" },
    { en: "aid", type: "n, v", ipa: "/erd/", vi: "sự giúp đỡ, cứu trợ, viện trợ" },
    { en: "aim", type: "n, v", ipa: "/eim/", vi: "mục tiêu; nhắm đến, hướng đến" },
    { en: "airline", type: "n", ipa: "/'er.lain/", vi: "công ty hàng không" },
    { en: "aisle", type: "n", ipa: "/ail/", vi: "gian hàng, lối đi giữa các dãy ghế" },
    { en: "alarm", type: "n", ipa: "/ə'la:rm/", vi: "sự báo động; báo động" },
    { en: "allow", type: "v", ipa: "/ǝ'lau/", vi: "cho phép, để cho" },
    { en: "alternative", type: "adj", ipa: "/a:lts.nǝ.tv/", vi: "xen kẽ, luân phiên" },
    { en: "ambitious", type: "adj", ipa: "/æm'bıf.ǝs/", vi: "tham vọng" },
    { en: "amend", type: "v", ipa: "/ə'mend/", vi: "sửa chữa, cải tạo" },
    { en: "amount", type: "n, v", ipa: "/ə'maont/", vi: "số lượng; cộng dồn lên tới" },
    { en: "amusing", type: "adj", ipa: "/amju:.zım/", vi: "vui, có tính hài hước" },
    { en: "analysis", type: "n", ipa: "/ə'næl.ə.sıs/", vi: "sự phân tích, bản phân tích" },
    { en: "analyze", type: "v", ipa: "/'æn.ǝl.aız/", vi: "phân tích" },
    { en: "annual", type: "adj", ipa: "/'æn.ju.ǝl/", vi: "hằng năm" },
    { en: "anticipate", type: "v", ipa: "/æn'tis.ǝ.peit/", vi: "phỏng đoán, dự đoán" },
    { en: "anxious", type: "adj", ipa: "/'æŋk.fǝs/", vi: "bồn chồn, lo lắng" },
    { en: "apologize", type: "v", ipa: "/ə'pa:.la.dzaız/", vi: "xin lỗi" },
    { en: "appeal", type: "n, v", ipa: "/ə'pi:l/", vi: "lời thỉnh cầu, sức lôi cuốn" },
    { en: "appetizer", type: "n", ipa: "/æp.ǝ.tai.za/", vi: "món khai vị" },
    { en: "appliance", type: "n", ipa: "/ə'plaı.ǝns/", vi: "thiết bị, dụng cụ" },
    { en: "applicant", type: "n", ipa: "/'æp.lə.kənt/", vi: "người ứng tuyển" },
    { en: "application", type: "n", ipa: "/æp.lə keı fən/", vi: "ứng dụng, sự áp dụng" },
    { en: "apply", type: "v", ipa: "/ə'plaı/", vi: "áp dụng, ứng tuyển" },
    { en: "appoint", type: "v", ipa: "/ə'point/", vi: "bổ nhiệm, chỉ định" },
    { en: "appointment", type: "n", ipa: "/ə'point.mənt/", vi: "sự bổ nhiệm, cuộc hẹn gặp" },
    { en: "appreciable", type: "adj", ipa: "/ə'pri: fə.bǝl/", vi: "đáng kể" },
    { en: "appreciate", type: "v", ipa: "/ə'pri: fi.eit/", vi: "đánh giá cao, cảm kích" },
    { en: "appreciation", type: "n", ipa: "/pri: fi'eı fən/", vi: "sự đánh giá cao, sự cảm kích" },
    { en: "appreciative of", type: "adj", ipa: "/ə'pri: fǝ.tiv/", vi: "đánh giá cao, ghi nhận" },
    { en: "apprentice", type: "n", ipa: "/ə'pren.ţis/", vi: "người học việc" },
    { en: "approve", type: "v", ipa: "/ə'pru:v/", vi: "tán thành, phê chuẩn" },
    { en: "approximate", type: "adj", ipa: "/ə'pra:k.sə.mət/", vi: "xấp xỉ, gần đúng" },
    { en: "arbitrate", type: "v", ipa: "/'a:r.bǝ.treit/", vi: "phân xử, làm trọng tài" },
    { en: "area", type: "n", ipa: "/er.i.ǝ/", vi: "khu vực, lĩnh vực, diện tích" },
    { en: "argue", type: "v", ipa: "/a:rg.ju:/", vi: "tranh cãi, tranh luận" },
    { en: "argument", type: "n", ipa: "/'a:rg.jǝ.mənt/", vi: "cuộc tranh luận" },
    { en: "arrange", type: "v", ipa: "/ə'reindz/", vi: "dàn xếp, sắp đặt" },
    { en: "arrangement", type: "n", ipa: "/ə'reindz.mənt/", vi: "sự sắp đặt" },
    { en: "assemble", type: "v", ipa: "/asem.bǝl/", vi: "lắp ráp, thu thập" },
    { en: "assess", type: "v", ipa: "/la'ses/", vi: "đánh giá, định giá" },
    { en: "asset", type: "n", ipa: "/æs.et/", vi: "của cải, tài sản, vốn quý" },
    { en: "assign", type: "v", ipa: "/ǝ'sain/", vi: "phân công, chia việc" },
    { en: "assignment", type: "n", ipa: "/ə'sain.mənt/", vi: "sự phân việc, bài tập tiểu luận" },
    { en: "assist", type: "v", ipa: "/ǝsist/", vi: "hỗ trợ, giúp đỡ" },
    { en: "assistance", type: "n", ipa: "/a'sıs.təns/", vi: "sự giúp đỡ, hỗ trợ" },
    { en: "assume", type: "v", ipa: "/ǝ'su:m/", vi: "cho rằng, làm ra vẻ" },
    { en: "attach", type: "v", ipa: "/a'tæts/", vi: "gán thêm, kèm thêm" },
    { en: "attachment", type: "n", ipa: "/ǝ'tæts.mənt/", vi: "sự gắn thêm, phần kèm thêm" },
    { en: "attend", type: "v", ipa: "/ǝ'tend/", vi: "tham dự" },
    { en: "attendance", type: "n", ipa: "/ə'ten.dəns/", vi: "sự tham gia, có mặt" },
    { en: "attract", type: "v", ipa: "/ǝ'trækt/", vi: "thu hút, hấp dẫn" },
    { en: "audience", type: "n", ipa: "/'a:.di.ǝns/", vi: "khán thính giả" },
    { en: "audit", type: "n, v", ipa: "/a:.dit/", vi: "kiểm toán" },
    { en: "authority", type: "n", ipa: "/ǝǝrǝ.ti/", vi: "quyền thế, nhà chức trách, chính quyền" },
    { en: "authorize", type: "v", ipa: "/'α:.00.aiz/", vi: "ủy quyền, cấp quyền" },
    { en: "availability", type: "n", ipa: "/ veı.lə bıl.ə.ti/", vi: "tính sẵn có" },
    { en: "available", type: "adj", ipa: "/ə'ver.lə.bǝl/", vi: "có sẵn để dùng" },
    { en: "avoid", type: "v", ipa: "/a'void/", vi: "tránh xa, ngăn ngừa" },
    { en: "avid", type: "adj", ipa: "/'æv.id/", vi: "khao khát, thèm khát" },
    { en: "awareness", type: "n", ipa: "/awer.nǝs/", vi: "sự nhận thức, ý thức" },
    { en: "awkward", type: "adj", ipa: "/a.kwa-d/", vi: "ngại ngùng, khó xử" },
    { en: "background", type: "n", ipa: "/'bæk.graond/", vi: "phông nền, gia cảnh, quá trình học tập" },
    { en: "backpack", type: "n", ipa: "/'bæk.pæk/", vi: "ba lô đeo sau lưng" },
    { en: "baggage claim", type: "n", ipa: "/bæg.1d3 kleim/", vi: "chỗ nhận hành lý" },
    { en: "balance", type: "n", ipa: "/'bæl.ǝns/", vi: "sự cân bằng, trạng thái cân bằng" },
    { en: "bank", type: "n", ipa: "/bænk/", vi: "ngân hàng, bãi sông" },
    { en: "bankrupt", type: "n, adj", ipa: "/'bæŋ.krapt/", vi: "người phá sản; vỡ nợ, phá sản" },
    { en: "bar code", type: "n", ipa: "/'bar kood/", vi: "mã vạch" },
    { en: "bargain", type: "n, v", ipa: "/'ba:r.gın/", vi: "sự mặc cả, món hời, mặc cả, thương lượng" },
    { en: "beautiful", type: "adj", ipa: "/bju:.tə.fǝl/", vi: "xinh đẹp, tốt đẹp" },
    { en: "behave", type: "v", ipa: "/br'herv/", vi: "hành xử, cư xử" },
    { en: "belongings", type: "n", ipa: "/bi'la:n.mz/", vi: "tài sản, đồ dùng cá nhân" },
    { en: "beneficial", type: "adj", ipa: "/ben.ǝ fif.ǝl/", vi: "có ích, có lợi" },
    { en: "benefit", type: "n", ipa: "/'ben.ǝ.fit/", vi: "ích lợi" },
    { en: "beverage", type: "n", ipa: "/'bev.2.1d3/", vi: "đồ uống, đồ giải khát" },
    { en: "bill", type: "n", ipa: "/bil/", vi: "hóa đơn" },
    { en: "binder", type: "n", ipa: "/'bain.do/", vi: "bìa ôm, bìa rời" },
    { en: "blanket", type: "n", ipa: "/blæn.kit/", vi: "chăn, mền" },
    { en: "block", type: "n, v", ipa: "/black/", vi: "khối, tảng, chướng ngại vật làm cản trở, phong tỏa" },
    { en: "board", type: "n, v", ipa: "/bɔ:rd/", vi: "tấm ván, bảng, mạn thuyền" },
    { en: "boardroom", type: "n", ipa: "/'bo:rd.ru:m/", vi: "phòng họp ban giám đốc" },
    { en: "boast", type: "n, v", ipa: "/boust/", vi: "sự khoe khoang, khoác lác" },
    { en: "book", type: "n, v", ipa: "/bok/", vi: "cuốn sách; đặt phòng, đặt vé" },
    { en: "boost", type: "v, n", ipa: "/bu:st/", vi: "đẩy mạnh, kích thích; sự tăng lên" },
    { en: "bored", type: "adj", ipa: "/bɔ:rd/", vi: "buồn chán, tẻ nhạt" },
    { en: "bother", type: "n, v", ipa: "/'ba: da-/", vi: "điều gây khó chịu; làm phiền, bận tâm" },
    { en: "bottom line", type: "n", ipa: "/ba:.təm 'laım/", vi: "điểm mấu chốt, cốt yếu" },
    { en: "branch", type: "n", ipa: "/bræntf/", vi: "cành cây, chi nhánh" },
    { en: "brand", type: "n", ipa: "/brænd/", vi: "nhãn hàng, thương hiệu" },
    { en: "briefcase", type: "n", ipa: "/'bri:f.kers/", vi: "cặp tài liệu" },
    { en: "briefing", type: "n", ipa: "/'bri:.fm/", vi: "sự chỉ dẫn, hướng dẫn" },
    { en: "broadcast", type: "n, v", ipa: "/'bra:d.kæst/", vi: "chương trình phát thanh; truyền bá, phát thanh" },
    { en: "broaden", type: "v", ipa: "/bra:.dən/", vi: "mở rộng, nới rộng" },
    { en: "browser", type: "n", ipa: "/'brao.za/", vi: "trình duyệt" },
    { en: "brush", type: "n, v", ipa: "/braf/", vi: "lược, bàn chải; chải, quét" },
    { en: "budget", type: "n, v", ipa: "/bad3.1t/", vi: "ngân sách; dự thảo ngân sách" },
    { en: "bulletin", type: "n", ipa: "/'bol.ə.tın/", vi: "bảng thông báo, tập san" },
    { en: "cabin crew", type: "n", ipa: "/'kæb.m kru:/", vi: "đội bay, tiếp viên hàng không" },
    { en: "cafeteria", type: "n", ipa: "/kæf.ǝ'tır.i.ə/", vi: "quán ăn tự phục vụ, phòng cà phê" },
    { en: "calculate", type: "v", ipa: "/'kæl.kjǝ.lert/", vi: "tính toán, suy tính" },
    { en: "calculation", type: "n", ipa: "/kæl.kjə'leı fən/", vi: "sự tính toán" },
    { en: "calculator", type: "n", ipa: "/kæl.kjǝ.ler.ta/", vi: "máy tính bỏ túi" },
    { en: "campaign", type: "n", ipa: "/kæm'pein/", vi: "chiến dịch, cuộc vận động" },
    { en: "cancel", type: "v", ipa: "/'kæn.sǝl/", vi: "hủy bỏ, xóa" },
    { en: "cancellation", type: "n", ipa: "/kæn.sǝler.fən/", vi: "sự xóa bỏ, bãi bỏ" },
    { en: "candidacy", type: "n", ipa: "/'kæn.dı.də.si/", vi: "sự ứng cử" },
    { en: "candidate", type: "n", ipa: "/'kændɪdət/", vi: "ứng cử viên" },
    { en: "capacity", type: "n", ipa: "/kə'pæs.ə.ti/", vi: "năng lực, sức chứa" },
    { en: "capital", type: "n", ipa: "/'kæp.ǝ.tǝl/", vi: "thủ đô, nguồn vốn, chữ viết hoa" },
    { en: "career", type: "n", ipa: "/kə'rır/", vi: "sự nghiệp" },
    { en: "careless", type: "adj", ipa: "/'ker.lǝs/", vi: "bất cẩn, cẩu thả" },
    { en: "cash", type: "n", ipa: "/pæk.1d3/", vi: "tiền mặt" },
    { en: "cashier", type: "n", ipa: "/kæfir/", vi: "nhân viên thu ngân" },
    { en: "cause", type: "n, v", ipa: "/kaz/", vi: "nguyên nhân, lý do; gây ra" },
    { en: "cautious", type: "adj", ipa: "/'ka: fǝs/", vi: "thận trọng, cẩn thận" },
    { en: "celebrate", type: "v", ipa: "/sel.ǝ.brert/", vi: "kỉ niệm, tán dương" },
    { en: "celebration", type: "n", ipa: "/sel.ǝ breı fən/", vi: "lễ kỉ niệm" },
    { en: "certificate", type: "n", ipa: "/sə'tif.ǝ.kət/", vi: "giấy chứng nhận" },
    { en: "certification", type: "n", ipa: "/s3.tə.fi keı fən/", vi: "sự cấp giấy chứng nhận" },
    { en: "chain", type: "n", ipa: "/tfem/", vi: "dây xích, chuỗi" },
    { en: "chain store", type: "n", ipa: "/tfein sto:r/", vi: "cửa hàng theo chuỗi, hệ thống cửa hàng" },
    { en: "chair", type: "n", ipa: "/tfer/", vi: "ghế ngồi" },
    { en: "chairperson", type: "n", ipa: "/'tfer p3.sən/", vi: "chủ tịch" },
    { en: "characteristic", type: "n", ipa: "/ker.ək.tə'rıs.tık/", vi: "đặc điểm, tính cách" },
    { en: "characterize", type: "v", ipa: "/'ker.ǝk.tə.arz/", vi: "biểu thị đặc điểm, mô tả đặc điểm" },
    { en: "charge", type: "n, v", ipa: "/tfa:rd3/", vi: "chi phí, tiền công, tính giá, đòi trả" },
    { en: "charity", type: "n", ipa: "/tfer.ǝ.ti/", vi: "lòng từ bi, tổ chức từ thiện" },
    { en: "cheap", type: "adj", ipa: "/tfi:p/", vi: "rẻ tiền, xấu" },
    { en: "check in", type: "v", ipa: "/tfek in/", vi: "đăng ký phòng, vé máy bay..." },
    { en: "check out", type: "v", ipa: "/tfek aut/", vi: "trả phòng, thanh toán" },
    { en: "chef", type: "n", ipa: "/Sef/", vi: "đầu bếp" },
    { en: "circumstances", type: "n", ipa: "/s.kəm.stæns/", vi: "hoàn cảnh, tình huống" },
    { en: "claim", type: "n, v", ipa: "/kleim/", vi: "quyền đòi sở hữu, đòi hỏi, nhận" },
    { en: "claimant", type: "n", ipa: "/'kler.mənt/", vi: "người thỉnh cầu, người đòi hỏi" },
    { en: "classify", type: "v", ipa: "/'klæs.ǝ.fai/", vi: "phân loại" },
    { en: "client", type: "n", ipa: "/'klaı.ǝnt/", vi: "khách hàng (của luật sư, cửa hàng...)" },
    { en: "climate", type: "n", ipa: "/'klaı.mǝt/", vi: "khí hậu, thời tiết" },
    { en: "commence", type: "v", ipa: "/kə'mens/", vi: "bắt đầu, mở đầu, khởi đầu" },
    { en: "commission", type: "n", ipa: "/kə'mıs.ən/", vi: "hội đồng, ủy ban, tiền hoa hồng" },
    { en: "committee", type: "n", ipa: "/kə'mıt.i/", vi: "ủy ban" },
    { en: "commonly", type: "adv", ipa: "/'ka: mən.li/", vi: "thông thường, bình thường" },
    { en: "commute", type: "v", ipa: "/kə'mju:t/", vi: "thay đổi cho nhau, di chuyển đều đặn bằng tàu, xe..." },
    { en: "commuter", type: "n", ipa: "/kə'mju:.to/", vi: "người đi lại bằng vé tháng trên tàu, xe..." },
    { en: "company", type: "n", ipa: "/'kam.pǝ.ni/", vi: "công ty, bạn bè, bằng hữu" },
    { en: "compare", type: "v", ipa: "/kəm'per/", vi: "so sánh, đối chiếu" },
    { en: "compatible", type: "adj", ipa: "/kəm pæt.ə.bəl/", vi: "tương thích, phù hợp" },
    { en: "compensate", type: "v", ipa: "/'ka:m.pǝn.sert/", vi: "đền bù, bồi thường" },
    { en: "compensation", type: "n", ipa: "/kam.pen ser fǝn/", vi: "sự đền bù, vật bồi thường" },
    { en: "competent", type: "adj", ipa: "/'ka:m.pə tənt/", vi: "có khả năng, đủ trình độ" },
    { en: "competitive", type: "adj", ipa: "/kəm pet.ǝ.tv/", vi: "có tính cạnh tranh, ganh đua" },
    { en: "competitor", type: "n", ipa: "/kəm pet.ǝ.to/", vi: "người cạnh tranh, đối thủ" },
    { en: "complain", type: "v", ipa: "/kəm plein/", vi: "kêu ca, phàn nàn, oán trách" },
    { en: "complaint", type: "n", ipa: "/kəm' pleint/", vi: "lời than phiền, lời phàn nàn" },
    { en: "complete", type: "adj", ipa: "/kəm pli:t/", vi: "đầy đủ, hoàn thiện" },
    { en: "complex", type: "n, adj", ipa: "/'ka:m.pleks/", vi: "khu phức hợp, phức tạp" },
    { en: "complexity", type: "n", ipa: "/kəm'plek.sə.ti/", vi: "sự phức tạp" },
    { en: "compliment", type: "n", ipa: "/ka:m.plə.mənt/", vi: "lời khen, sự ca tụng" },
    { en: "complimentary", type: "adj", ipa: "/ka:m.plə'men.to.i/", vi: "ngợi khen, đánh giá cao" },
    { en: "comply", type: "v", ipa: "/kəmˈplaɪ/", vi: "tuân theo, làm theo" },
    { en: "comprehensive", type: "adj", ipa: "/ka:m.prǝ'hen.siv/", vi: "toàn diện, thông minh" },
    { en: "compromise", type: "n, v", ipa: "/'ka:m.prǝ.maiz/", vi: "sự thỏa hiệp, dàn xếp, thỏa hiệp" },
    { en: "compulsory", type: "adj", ipa: "/kəmpal.sai/", vi: "bắt buộc, ép buộc" },
    { en: "concede", type: "v", ipa: "/kən'si:d/", vi: "thừa nhận" },
    { en: "concern", type: "n, v", ipa: "/kən'san/", vi: "mối bận tâm, chuyện đáng lo; liên quan, dính líu tới" },
    { en: "conclude", type: "v", ipa: "/kən'lu:d/", vi: "kết thúc, chấm dứt, kết luận" },
    { en: "conclusion", type: "n", ipa: "/kən'lu:.zən/", vi: "kết luận" },
    { en: "concourse", type: "n", ipa: "/'ka:n.kɔ:rs/", vi: "đám đông, sự tụ họp" },
    { en: "condition", type: "n, v", ipa: "/kən dıs.ən/", vi: "điều kiện, tình cảnh, tình trạng" },
    { en: "conduct", type: "n, v", ipa: "/ka:n.dakt/", vi: "hạnh kiểm, đạo đức; tiến hành, chỉ đạo" },
    { en: "confirmation", type: "n", ipa: "/kain.fə meı fən/", vi: "sự xác nhận, chứng thực" },
    { en: "confusion", type: "n", ipa: "/kən'fju:.zən/", vi: "sự bối rối, khó hiểu" },
    { en: "connect", type: "v", ipa: "/kə'nekt/", vi: "nối lại, kết nối" },
    { en: "consequence", type: "n", ipa: "/khan.sə.kwəns/", vi: "hậu quả, kết quả" },
    { en: "considerable", type: "adj", ipa: "/kən'sıd.ə.ə.bǝl/", vi: "đáng kể, lớn lao" },
    { en: "consignment", type: "n", ipa: "/kən saın.mənt/", vi: "hoạt động gửi hàng để bán" },
    { en: "consistently", type: "adv", ipa: "/kən'sıs.tǝnt.li/", vi: "kiên định, trước sau như một, đồng nhất" },
    { en: "constant", type: "adj", ipa: "/ka:n.stənt/", vi: "liên tục, liên tiếp, kiên trì" },
    { en: "consultant", type: "n", ipa: "/kən'sal tənt/", vi: "tư vấn viên, cố vấn" },
    { en: "consume", type: "v", ipa: "/kən'su:m/", vi: "sử dụng, tiêu dùng, tiêu thụ" },
    { en: "consumer", type: "n", ipa: "/kən'su: mǝ/", vi: "người tiêu dùng" },
    { en: "continual", type: "adj", ipa: "/kən'tın.ju.ǝl/", vi: "liên tục, liên miên" },
    { en: "continue", type: "v", ipa: "/kən'tın.ju:/", vi: "tiếp tục, duy trì" },
    { en: "contribute", type: "v", ipa: "/kən trıb.ju:t/", vi: "đóng góp, góp phần" },
    { en: "control", type: "n, v", ipa: "/kən troul/", vi: "sự điều khiển, cầm lái; điều khiển, chỉ huy, kiểm soát" },
    { en: "control panel", type: "n", ipa: "/kən'trool pæn.ǝl/", vi: "bảng điều khiển" },
    { en: "conveniently", type: "adv", ipa: "/kən'vi.ni.ǝnt.li/", vi: "thuận tiện, tiện lợi" },
    { en: "convince", type: "v", ipa: "/kən'vins/", vi: "thuyết phục" },
    { en: "corporate", type: "n, v", ipa: "/'kɔ:r.pa.at/", vi: "công ty, tập đoàn; (thuộc) đoàn thể" },
    { en: "corporation", type: "n", ipa: "/corporation/", vi: "đoàn thể, tập đoàn" },
    { en: "cost", type: "n, v", ipa: "/ka:st/", vi: "giá, chi phí định giá, trả giá" },
    { en: "counter", type: "n, v", ipa: "/kaun.to/", vi: "quầy hàng, quầy thu ngân; phản đối, chống lại" },
    { en: "courier", type: "n", ipa: "/kor.i.a/", vi: "người đưa thư, đưa tin" },
    { en: "cover letter", type: "n", ipa: "/kav.ǝlet.ǝr/", vi: "thư trình bày thông tin, nguyện vọng" },
    { en: "coverage", type: "n", ipa: "/kAv.2.1d3/", vi: "mức độ bao phủ, che phủ; bản tin sự kiện" },
    { en: "coworker", type: "n", ipa: "/kou'waka/", vi: "đồng nghiệp" },
    { en: "crash", type: "n, v", ipa: "/kræf/", vi: "sự va đập, sụp đổ; rơi vỡ, va đập" },
    { en: "credentials", type: "n", ipa: "/krı'den falz/", vi: "giấy ủy nhiệm, chứng chỉ" },
    { en: "credit", type: "n", ipa: "/'kred.it/", vi: "danh tiếng, tín dụng, tín chỉ" },
    { en: "criterion", type: "n", ipa: "/krai'tır.i.ən/", vi: "tiêu chí đánh giá" },
    { en: "critical", type: "adj", ipa: "/'krıt.1.kǝl/", vi: "phê bình, phê phán; nguy kịch" },
    { en: "criticize", type: "v", ipa: "/'krit.1.saiz/", vi: "phê bình, chỉ trích" },
    { en: "crowd", type: "n, v", ipa: "/kraud/", vi: "đám đông, đống, xúm lại, tụ tập" },
    { en: "crowded", type: "adj", ipa: "/krau.did/", vi: "đông đúc; nhiều, đầy" },
    { en: "crucial", type: "adj", ipa: "/'kru:.fǝl/", vi: "có tính quyết định, trọng yếu" },
    { en: "cruise", type: "n, v", ipa: "/kru:z/", vi: "chuyến du lịch, đi chơi trên biển" },
    { en: "currency", type: "n", ipa: "/k3.ǝn.si/", vi: "tiền tệ" },
    { en: "current", type: "n, adj", ipa: "/'k3.ǝnt/", vi: "dòng, luồng; hiện tại, hiện thời" },
    { en: "custom", type: "n", ipa: "/kas.təm/", vi: "phong tục, tục lệ" },
    { en: "customer", type: "n", ipa: "/'kas.tə.ma/", vi: "khách hàng" },
    { en: "cutting edge", type: "adj", ipa: "/kat.med3/", vi: "đột phá, vượt trội" },
    { en: "cycle", type: "n", ipa: "/'saıkəl/", vi: "chu kỳ, chu trình" },
    { en: "daily", type: "adj", ipa: "/der.li/", vi: "hằng ngày" },
    { en: "damage", type: "n", ipa: "/'dæm.1d3/", vi: "mối gây hại; làm hại, hư hỏng" },
    { en: "deadline", type: "n", ipa: "/'ded.lain/", vi: "hạn cuối, hạn hoàn thành" },
    { en: "deal", type: "n, v", ipa: "/di/:1/", vi: "thỏa thuận mua bán; giải quyết, đối phó" },
    { en: "debit", type: "n", ipa: "/deb.it/", vi: "món nợ, ghi nợ" },
    { en: "debt", type: "n", ipa: "/det/", vi: "khoản nợ" },
    { en: "decision", type: "n", ipa: "/dı'sız.ən/", vi: "quyết định" },
    { en: "decorate", type: "v", ipa: "/dek.ǝr.ert/", vi: "trang trí, trang hoàng" },
    { en: "decrease", type: "n", ipa: "/di: kri:s/", vi: "sự sụt giảm; làm giảm đi" },
    { en: "dedicate", type: "v", ipa: "/'ded.ǝ.kert/", vi: "cống hiến, tận hiến" },
    { en: "deduct", type: "v", ipa: "/dı'dakt/", vi: "khấu trừ, trừ đi" },
    { en: "definite", type: "adj", ipa: "/def.ǝn.ǝt/", vi: "xác định rõ, rõ ràng" },
    { en: "definitely", type: "adv", ipa: "/def.ǝn.ǝt.li/", vi: "rõ ràng, dứt khoát, chắc chắn" },
    { en: "degree", type: "n", ipa: "/dr'gri:/", vi: "mức độ, trình độ, cấp bậc, độ, nhiệt độ" },
    { en: "delay", type: "n, v", ipa: "/di'lei/", vi: "sự chậm trễ, trì hoãn; làm chậm, hoãn lại" },
    { en: "delighted", type: "adj", ipa: "/dr'lar.tid/", vi: "hài lòng, vui mừng" },
    { en: "deliver", type: "v", ipa: "/di'liv.ǝ/", vi: "phân phối, giao hàng, đem tới, phát biểu" },
    { en: "delivery", type: "n", ipa: "/dr'liv..i/", vi: "sự phân phát, giao hàng, sự phát biểu" },
    { en: "demand", type: "n, v", ipa: "/dı'mænd/", vi: "sự đòi hỏi; yêu cầu" },
    { en: "demanding", type: "adj", ipa: "/dı'mæn.dın/", vi: "yêu cầu cao, đòi hỏi khắt khe" },
    { en: "demonstrate", type: "v", ipa: "/'dem.ǝn.strert/", vi: "làm mẫu, giải thích, biểu tình" },
    { en: "depart", type: "v", ipa: "/drpa:rt/", vi: "rời đi, từ giã" },
    { en: "department", type: "n", ipa: "/dı'part.mənt/", vi: "khoa, bộ" },
    { en: "depend", type: "v", ipa: "/di'pend/", vi: "phụ thuộc, lệ thuộc" },
    { en: "dependence", type: "n", ipa: "/dı pen.dəns/", vi: "sự phụ thuộc" },
    { en: "deposit", type: "n, v", ipa: "/di'pa..zit/", vi: "tiền cọc; đặt cọc" },
    { en: "description", type: "n", ipa: "/dı'skrıp.fan/", vi: "bản mô tả, sự mô tả" },
    { en: "designate", type: "v", ipa: "/'dez.ig.net/", vi: "chỉ định, bổ nhiệm" },
    { en: "dessert", type: "n", ipa: "/dr'z3:t/", vi: "món tráng miệng" },
    { en: "destination", type: "n", ipa: "/des.tə'neı fən/", vi: "đích đến, điểm đến, dự định" },
    { en: "detail", type: "n, v", ipa: "/di:.teil/", vi: "chi tiết, tiểu tiết; trình bày chi tiết, làm rõ" },
    { en: "detailed", type: "adj", ipa: "/'di:.teild/", vi: "chi tiết, cụ thể" },
    { en: "detect", type: "v", ipa: "/di'tekt/", vi: "dò ra, tìm ra, phát hiện" },
    { en: "deterioration", type: "n", ipa: "/dı, tır.i.ə'reı fən/", vi: "sự hư hại, xuống cấp, sa đọa" },
    { en: "determine", type: "v", ipa: "/di't3mm/", vi: "xác định rõ, định rõ, quyết định, quyết tâm" },
    { en: "determined", type: "adj", ipa: "/dr't:mind/", vi: "quyết tâm, kiên quyết" },
    { en: "develop", type: "v", ipa: "/di'vel.ǝp/", vi: "phát triển, tiến triển" },
    { en: "developer", type: "n", ipa: "/di'vel.ǝ.pa-/", vi: "người phát triển, lập trình viên" },
    { en: "development", type: "n", ipa: "/dı'vel.ǝp.mənt/", vi: "sự phát triển" },
    { en: "device", type: "n", ipa: "/di'vais/", vi: "thiết bị, máy móc, phương sách" },
    { en: "diagnose", type: "v", ipa: "/dai.ǝg'nouz/", vi: "chẩn đoán" },
    { en: "differential", type: "adj", ipa: "/dif.ǝ'ren.fǝl/", vi: "khác biệt, chênh lệch" },
    { en: "diligent", type: "adj", ipa: "/dıl.ə.dzənt/", vi: "chăm chỉ, cần cù" },
    { en: "director", type: "n", ipa: "/dai'rek.to/", vi: "giám đốc, người điều hành, đạo diễn" },
    { en: "disagree", type: "v", ipa: "/dis.ǝ'tri:/", vi: "bất đồng, không khớp với nhau" },
    { en: "disagreement", type: "n", ipa: "/dıs.ǝ'gri..mənt/", vi: "sự bất đồng, mối bất hòa, mâu thuẫn" },
    { en: "disappointing", type: "adj", ipa: "/dis.ə'poin.tın/", vi: "đáng thất vọng" },
    { en: "disconnect", type: "v", ipa: "/dis.kə'nekt/", vi: "ngắt kết nối" },
    { en: "discount", type: "n, v", ipa: "/'dis.kaunt/", vi: "sự giảm giá, chiết khấu; giảm giá, bớt giá" },
    { en: "discrepancy", type: "n", ipa: "/dı'skrep.ǝn.si/", vi: "khác biệt, chênh lệch, điểm không đồng nhất" },
    { en: "discrimination", type: "n", ipa: "/dı, skrım.ǝ'neı fən/", vi: "sự phân biệt đối xử" },
    { en: "discuss", type: "v", ipa: "/di'skAs/", vi: "thảo luận, tranh luận" },
    { en: "discussion", type: "n", ipa: "/di'skAJ.ən/", vi: "cuộc tranh luận, thảo luận" },
    { en: "dish", type: "n", ipa: "/drf/", vi: "đĩa đựng thức ăn, món ăn" },
    { en: "dismiss", type: "v", ipa: "/dı'smis/", vi: "giải tán, thải hồi" },
    { en: "dismissive", type: "adj", ipa: "/di'smis.Iv/", vi: "thô bạo, tùy tiện" },
    { en: "display", type: "n, v", ipa: "/di'sple1/", vi: "sự bày biện; trưng bày, phô diễn" },
    { en: "disposable", type: "adj", ipa: "/dı spoo.zə.bǝl/", vi: "dùng một lần, sẵn có để dùng" },
    { en: "dispose", type: "v", ipa: "/di'spooz/", vi: "vứt bỏ, giải quyết" },
    { en: "dispue", type: "n, v", ipa: "/di'spju:t/", vi: "cuộc bàn cãi, cuộc tranh luận; tranh luận" },
    { en: "disruption", type: "n", ipa: "/dis rap.fǝn/", vi: "sự phá vỡ, đập gãy" },
    { en: "distinctive", type: "adj", ipa: "/dı'stink.trv/", vi: "đặc biệt, độc đáo" },
    { en: "distinguish", type: "v", ipa: "/di'tin.gwif/", vi: "phân biệt, nhận ra" },
    { en: "distribute", type: "v", ipa: "/distrib.ju:t/", vi: "phân phát, phân bổ" },
    { en: "distribution", type: "n", ipa: "/dıs.tri'bju: fən/", vi: "sự phân phát" },
    { en: "dividend", type: "n", ipa: "/drv.ǝ.dend/", vi: "số bị chia" },
    { en: "document", type: "n", ipa: "/'da:.kjǝ.mənt/", vi: "văn kiện, tài liệu; dẫn chứng tư liệu" },
    { en: "donate", type: "v", ipa: "/'doo.net/", vi: "quyên góp, đóng góp" },
    { en: "donation", type: "n", ipa: "/doo'ner.fǝn/", vi: "sự quyên góp, sự hiến tặng" },
    { en: "double", type: "n, adj, adv", ipa: "/'dab.ǝl/", vi: "nhân đôi, gấp đôi" },
    { en: "download", type: "v", ipa: "/'daun.loud/", vi: "tải xuống" },
    { en: "downsize", type: "v", ipa: "/'daun.saiz/", vi: "cắt giảm" },
    { en: "downturn", type: "n", ipa: "/daon.t3:n/", vi: "sự suy sụp" },
    { en: "downward", type: "adv", ipa: "/'daun.wo-d/", vi: "trở xuống, trở về sau" },
    { en: "drastically", type: "adv", ipa: "/'dræs.tı.kǝl.i/", vi: "mạnh mẽ, quyết liệt" },
    { en: "draw", type: "v", ipa: "/dra:/", vi: "kéo, lôi, thu hút, vẽ" },
    { en: "drawer", type: "n", ipa: "/dra:/", vi: "ngăn kéo" },
    { en: "drive", type: "n, v", ipa: "/draiv/", vi: "cuộc đua lái xe" },
    { en: "dull", type: "adj", ipa: "/dal/", vi: "chậm hiểu, đần độn, cùn" },
    { en: "duration", type: "n", ipa: "/djuǝ'rei.fan/", vi: "khoảng thời gian, thời hạn" },
    { en: "duty-free", type: "adj, adv", ipa: "/du:.ţi fri:/", vi: "miễn thuế" },
    { en: "earn", type: "v", ipa: "/3:n/", vi: "kiếm được, giành được" },
    { en: "earnings", type: "n", ipa: "/3.nz/", vi: "số tiền kiếm được" },
    { en: "economical", type: "adj", ipa: "/i.kə'na: mıkəl/", vi: "tiết kiệm, kinh tế" },
    { en: "economize", type: "v", ipa: "/ika: nə.maız/", vi: "tiết kiệm" },
    { en: "economy", type: "n", ipa: "/i'ka..nə.mi/", vi: "nền kinh tế" },
    { en: "effective", type: "adj", ipa: "/a'fek.tiv/", vi: "hiệu quả, có hiệu lực" },
    { en: "effectively", type: "adv", ipa: "/ǝ'fek.tıv.li/", vi: "có hiệu quả" },
    { en: "effectiveness", type: "n", ipa: "/ə'fek.tiv.nǝs/", vi: "sự hiệu quả" },
    { en: "efficiency", type: "n", ipa: "/r'fif.ǝn.si/", vi: "năng lực, hiệu suất, năng suất" },
    { en: "efficient", type: "adj", ipa: "/1'fif.ǝnt/", vi: "năng suất cao, hiệu suất tốt" },
    { en: "efficiently", type: "adv", ipa: "/t'fif.ǝnt.li/", vi: "có nghiệm" },
    { en: "elderly", type: "adj", ipa: "/el.da.li/", vi: "có tuổi, lớn tuổi" },
    { en: "elevator", type: "n", ipa: "/'el.ə.ver.ta/", vi: "thang máy, máy nâng" },
    { en: "embark", type: "v", ipa: "/im'ba:rk/", vi: "bắt đầu, lên đường, dấn thân vào" },
    { en: "emergency", type: "n", ipa: "/1m3.dzən.si/", vi: "trường hợp khẩn cấp" },
    { en: "emphasize", type: "v", ipa: "/'em.fǝ.saız/", vi: "nhấn mạnh" },
    { en: "employer", type: "n", ipa: "/ım'plǝı.ə/", vi: "người làm chủ, người sử dụng lao động" },
    { en: "employment", type: "n", ipa: "/ım'plǝı.mənt/", vi: "việc làm, sự thuê người làm" },
    { en: "enable", type: "v", ipa: "/rnerbǝl/", vi: "cho phép, làm cho có khả năng làm gì đó" },
    { en: "enclose", type: "v", ipa: "/m'klouz/", vi: "vây quanh, rào quanh, gửi kèm" },
    { en: "encourage", type: "v", ipa: "/in'k3.1d3/", vi: "động viên, cổ vũ" },
    { en: "endure", type: "v", ipa: "/in'dor/", vi: "chịu đựng, cam chịu" },
    { en: "engineer", type: "n", ipa: "/en.dzı'nır/", vi: "kỹ sư" },
    { en: "engineering", type: "n", ipa: "/en.dzı'nır.in/", vi: "công việc kỹ sư" },
    { en: "enhance", type: "v", ipa: "/in'hæns/", vi: "làm tăng thêm, đề cao, đẩy mạnh" },
    { en: "enlighten", type: "v", ipa: "/ın'lar.tǝn/", vi: "làm sáng tỏ, khai sáng" },
    { en: "enroll", type: "v", ipa: "/in'rǝol/", vi: "đăng ký, ghi tên" },
    { en: "ensure", type: "v", ipa: "/in'for/", vi: "bảo đảm, chắc chắn" },
    { en: "enterprise", type: "n", ipa: "/'en.ta.praiz/", vi: "xí nghiệp, doanh nghiệp" },
    { en: "enthusiastic", type: "adj", ipa: "/mou.zi'æs.tık/", vi: "nhiệt tình, hứng khởi" },
    { en: "enthusiastically", type: "adv", ipa: "/mou: zi'æs.tı.kəl.i/", vi: "hăng say, nhiệt tình" },
    { en: "entitlement", type: "n", ipa: "/in'tar.təl.mənt/", vi: "quyền hạn, sự được phép làm" },
    { en: "entrée", type: "n", ipa: "/a:n.trei/", vi: "món chính; sự gia nhập, thâm nhập, tiến vào" },
    { en: "environment", type: "n", ipa: "/ın vaı.rən.mənt/", vi: "môi trường" },
    { en: "environmental", type: "adj", ipa: "/ın var.rən men.təl/", vi: "(thuộc) môi trường" },
    { en: "equivalent", type: "adj, n", ipa: "/1kwiv.ǝl.ǝnt/", vi: "tương đương, vật tương đương" },
    { en: "essential", type: "adj", ipa: "/r'sen.fǝl/", vi: "(thuộc) bản chất, cốt lõi" },
    { en: "estimate", type: "v", ipa: "/'es.tə.meit/", vi: "ước tính, dự đoán" },
    { en: "evaluate", type: "v", ipa: "/t'væl.ju.ert/", vi: "ước lượng, đánh giá" },
    { en: "evolve", type: "v", ipa: "/ι'να:/", vi: "tiến hóa" },
    { en: "event", type: "n", ipa: "/I'vent/", vi: "sự kiện, sự việc" },
    { en: "evidence", type: "n", ipa: "/'ev.ǝ.dəns/", vi: "bằng chứng, chứng cớ" },
    { en: "exact", type: "adj", ipa: "/ig'zækt/", vi: "chính xác, đúng" },
    { en: "examination", type: "n", ipa: "/ig, zæm.ǝ'neı fən/", vi: "sự khám xét, kỳ thi" },
    { en: "examine", type: "v", ipa: "/ig'zæm.in/", vi: "khảo sát, kiểm tra" },
    { en: "excel", type: "v", ipa: "/ik'sel/", vi: "hơn, vượt trội" },
    { en: "excellent", type: "adj", ipa: "/'ek.sǝl.ǝnt/", vi: "xuất sắc, ưu tú" },
    { en: "executive", type: "adj, n", ipa: "/ig'zek.jǝ.tv/", vi: "(thuộc) chấp hành, sự thi hành; tổ chức hành pháp" },
    { en: "exhibit", type: "v", ipa: "/ig'zib.it/", vi: "trưng bày, triển lãm" },
    { en: "expand", type: "v", ipa: "/ık'spænd/", vi: "mở rộng, nở phồng" },
    { en: "expansion", type: "n", ipa: "/ık'spæn.fan/", vi: "sự mở rộng, giãn nở" },
    { en: "expect", type: "v", ipa: "/ik'spekt/", vi: "chờ đợi, trông chờ" },
    { en: "expectation", type: "n", ipa: "/ek.spekter.fǝn/", vi: "sự mong chờ, ngóng đợi" },
    { en: "expenditure", type: "n", ipa: "/ık'spen.də.tfa/", vi: "sự tiêu dùng, phí tổn" },
    { en: "expense", type: "n", ipa: "/ik'spens/", vi: "chi phí, sự tiêu dùng" },
    { en: "expensive", type: "adj", ipa: "/ık'spen.srv/", vi: "đắt tiền, đắt đỏ" },
    { en: "experience", type: "n", ipa: "/ık'spır.i.əns/", vi: "trải nghiệm, kinh nghiệm" },
    { en: "experienced", type: "adj", ipa: "/ık'spıǝ.ri.ǝnst/", vi: "người từng trải, người có kinh nghiệm" },
    { en: "experiment", type: "n, v", ipa: "/ık'sper.ə.mənt/", vi: "thí nghiệm, thử nghiệm" },
    { en: "exploration", type: "n", ipa: "/ek.splə'reı fən/", vi: "cuộc thăm dò, thám hiểm" },
    { en: "express", type: "n, v", ipa: "/ik'spres/", vi: "công văn hỏa tốc; trình bày, diễn đạt" },
    { en: "extend", type: "v", ipa: "/ık'stend/", vi: "duỗi thẳng, nới rộng, gia hạn" },
    { en: "extension", type: "n", ipa: "/ık'sten.fǝn/", vi: "sự mở rộng, gia hạn" },
    { en: "external", type: "adj", ipa: "/ık'st.nǝl/", vi: "bên ngoài, đối ngoại" },
    { en: "facility", type: "n", ipa: "/fə sıl.ə.ti/", vi: "điều kiện thuận lợi, sự dễ dàng, thuận lợi" },
    { en: "factor", type: "n", ipa: "/fæk.to/", vi: "nhân tố" },
    { en: "factory", type: "n", ipa: "/'fæk.to.i/", vi: "nhà máy, xí nghiệp" },
    { en: "fail", type: "v", ipa: "/ferl/", vi: "thất bại, trượt (kỳ thi)" },
    { en: "failure", type: "n", ipa: "/'fer.lja/", vi: "sự thất bại" },
    { en: "fair", type: "n, adj", ipa: "/fer/", vi: "hội chợ, phiên chợ, công bằng, không thiên vị" },
    { en: "famed", type: "adj", ipa: "/feimd/", vi: "nổi tiếng, lừng danh" },
    { en: "fare", type: "n, v", ipa: "/fer/", vi: "tiền xe, tiền vé; đi đường, đi du lịch" },
    { en: "fault", type: "n", ipa: "/fa:lt/", vi: "lỗi, sai lầm" },
    { en: "faulty", type: "adj", ipa: "/fa:l.ti/", vi: "có thiếu sót, mắc khuyết điểm" },
    { en: "favor", type: "n, v", ipa: "/'fer.va/", vi: "thiện ý, sự yêu mến; ưu đãi, thiên vị" },
    { en: "fax", type: "n", ipa: "/fæks/", vi: "bản fax" },
    { en: "feature", type: "n", ipa: "/fi:.tfa/", vi: "nét, đặc điểm" },
    { en: "fee", type: "n", ipa: "/fi:/", vi: "lệ phí, tiền thù lao" },
    { en: "feedback", type: "n, v", ipa: "/'fi:d.bæk/", vi: "phản hồi, góp ý" },
    { en: "figure", type: "n, v", ipa: "/fig.jo/", vi: "hình dáng, nhân vật; đánh giá, tính toán" },
    { en: "file", type: "n", ipa: "/fail/", vi: "hồ sơ, túi đựng tài liệu" },
    { en: "fill", type: "v", ipa: "/fil/", vi: "làm đầy, nhồi nhét" },
    { en: "final", type: "adj", ipa: "/'far.nǝl/", vi: "cuối cùng" },
    { en: "finance", type: "n, v", ipa: "/'far.næns/", vi: "tài chính; hỗ trợ tài chính" },
    { en: "financial", type: "adj", ipa: "/far næn fǝl/", vi: "(thuộc) tài chính" },
    { en: "fix", type: "n, v", ipa: "/fiks/", vi: "sửa chữa, gắn chặt, cố định" },
    { en: "flexible", type: "adj", ipa: "/'flek.sə.bǝl/", vi: "linh hoạt, không cố định" },
    { en: "flight", type: "n", ipa: "/flart/", vi: "chuyến bay, sự rút chạy" },
    { en: "flight attendant", type: "n", ipa: "/'flait ǝten.dənt/", vi: "tiếp viên hàng không" },
    { en: "fluctuate", type: "v", ipa: "/flak.tfu.eit/", vi: "dao động, lên xuống" },
    { en: "fluctuation", type: "n", ipa: "/flak.tfu'er fǝn/", vi: "sự dao động" },
    { en: "focus", type: "v, n", ipa: "/'fou.kas/", vi: "tập trung" },
    { en: "focused", type: "adj", ipa: "/fou.kəst/", vi: "tập trung, chú ý" },
    { en: "fold", type: "v, n", ipa: "/foold/", vi: "gấp, vén; nếp gấp" },
    { en: "folder", type: "n", ipa: "/'foul.do/", vi: "bìa cứng, xấp tài liệu" },
    { en: "force", type: "n", ipa: "/fo:rs/", vi: "sức mạnh, quyền lực" },
    { en: "forecast", type: "n, v", ipa: "/forkæst/", vi: "dự đoán, tiên đoán" },
    { en: "foreign", type: "adj", ipa: "/for.ən/", vi: "nước ngoài, ngoại quốc" },
    { en: "forget", type: "v", ipa: "/fa'get/", vi: "quên" },
    { en: "forgetful", type: "adj", ipa: "/fa'get.fǝl/", vi: "tính hay quên, có trí nhớ tồi" },
    { en: "form", type: "n", ipa: "/form/", vi: "dáng hình; tạo hình" },
    { en: "forward", type: "adv", ipa: "/for.wə-d/", vi: "về phía trước, tiến lên" },
    { en: "frank", type: "adj", ipa: "/frænk/", vi: "ngay thẳng, bộc trực" },
    { en: "frankly", type: "adv", ipa: "/'fræn.kli/", vi: "thẳng thắn" },
    { en: "fuel", type: "n", ipa: "/fju:.ǝl/", vi: "chất đốt, nhiên liệu" },
    { en: "fulfill", type: "v", ipa: "/fol' fil/", vi: "làm đầy" },
    { en: "function", type: "v, n", ipa: "/faŋk.fan/", vi: "hoạt động; chức năng" },
    { en: "functional", type: "adj", ipa: "/fank.sən.ǝl/", vi: "(thuộc) chức năng" },
    { en: "fundraising", type: "n", ipa: "/fand rei.zm/", vi: "sự huy động vốn" },
    { en: "furniture", type: "n", ipa: "/fs.ni.tfa/", vi: "đồ đạc" },
    { en: "further", type: "adj, adv", ipa: "/fa/", vi: "xa hơn, kỹ hơn" },
    { en: "gesture", type: "n", ipa: "/'dzes.tfa/", vi: "điệu bộ, cử chỉ" },
    { en: "goal", type: "n", ipa: "/gool/", vi: "khung thành, cầu môn, mục tiêu" },
    { en: "goods", type: "n", ipa: "/gudz/", vi: "của cải, hàng hóa" },
    { en: "gradually", type: "adv", ipa: "/grædz.u.ǝ.li/", vi: "dần dần, từ từ" },
    { en: "grievance", type: "n", ipa: "/gri:.vəns/", vi: "lời than trách" },
    { en: "grill", type: "n, v", ipa: "/gril/", vi: "chả nướng; nướng, thiêu đốt" },
    { en: "growth", type: "n", ipa: "/groo0/", vi: "sự tăng trưởng, mức độ tăng trưởng" },
    { en: "guarantee", type: "n, v", ipa: "/ger.an'ti:/", vi: "sự đảm bảo; cam kết" },
    { en: "guideline", type: "n", ipa: "/gaid.lam/", vi: "quy tắc, nguyên tắc" },
    { en: "haggle", type: "n, v", ipa: "/hæg.ǝl/", vi: "sự mặc cả; tranh cãi" },
    { en: "handle", type: "n, v", ipa: "/'hæn.dəl/", vi: "cán cầm, tay cầm; xử lý" },
    { en: "handy", type: "adj", ipa: "/hæn.di/", vi: "thuận tiện, sẵn tiện" },
    { en: "harbor", type: "n, v", ipa: "/'ha:.bər/", vi: "bến cảng; che giấu, nuôi dưỡng" },
    { en: "harmful", type: "adj", ipa: "/'ha:rm.fǝl/", vi: "gây tai hại, có hại" },
    { en: "hazardous", type: "adj", ipa: "/hæz.a.das/", vi: "mạo hiểm, nguy hiểm" },
    { en: "head office", type: "n", ipa: "/hed 'a:.fis/", vi: "cơ quan đầu não, tổng công ty" },
    { en: "headquarters", type: "n", ipa: "/hed kwɔ:r.to-z/", vi: "sở chỉ huy, bộ chỉ huy" },
    { en: "hesitate", type: "v", ipa: "/'hez.ǝ.text/", vi: "do dự, ngập ngừng" },
    { en: "hesitation", type: "n", ipa: "/hez.ǝteı fən/", vi: "sự ngập ngừng, do dự" },
    { en: "hide", type: "n, v", ipa: "/hard/", vi: "che giấu, che đậy" },
    { en: "highlight", type: "n, v", ipa: "/'har.lait/", vi: "điểm nổi bật; làm nổi bật" },
    { en: "highly", type: "adv", ipa: "/'hat.li/", vi: "rất, lắm, tốt" },
    { en: "hike", type: "n", ipa: "/hark/", vi: "cuộc đi bộ, cuộc hành quân; đi bộ đường dài" },
    { en: "hire", type: "n, v", ipa: "/hair/", vi: "sự thuê; thuê, mướn" },
    { en: "hold", type: "n, v", ipa: "/hould/", vi: "sự cầm, nắm; cầm, giữ" },
    { en: "host", type: "n, v", ipa: "/houst/", vi: "chủ nhà, chủ trì; tổ chức, đăng cai" },
    { en: "identification", type: "n", ipa: "/aı, den.tə.fə keı fən/", vi: "sự phát hiện, nhận diện" },
    { en: "identify", type: "v", ipa: "/ar'den.tə.fai/", vi: "nhận diện, nhận biết" },
    { en: "imaginative", type: "adj", ipa: "/'mædz.ǝ.nə.tv/", vi: "tưởng tượng, không có thực" },
    { en: "immediate", type: "adj", ipa: "/1'mi:.di.ǝt/", vi: "ngay lập tức, trực tiếp" },
    { en: "immediately", type: "adv", ipa: "/mi.di.ǝt.li/", vi: "ngay lập tức, tức thì" },
    { en: "impact", type: "n, v", ipa: "/'im.pækt/", vi: "tác động, ảnh hưởng" },
    { en: "impatient", type: "adj", ipa: "/&iuml;m'per.fǝnt/", vi: "thiếu kiên nhẫn" },
    { en: "impersonate", type: "v", ipa: "/&iuml;m'p3.sən.ert/", vi: "mạo danh, đóng vai, nhại lại" },
    { en: "implement", type: "n, v", ipa: "/'ım.plǝ.ment/", vi: "dụng cụ, phương tiện; thi hành, thực hiện, áp dụng" },
    { en: "imply", type: "v", ipa: "/&iuml;m'plai/", vi: "ngụ ý, ý nói" },
    { en: "impression", type: "n", ipa: "/&iuml;m'pref.ən/", vi: "ấn tượng, dấu vết" },
    { en: "improper", type: "adj", ipa: "/im'pra:.pa/", vi: "không thích hợp, không phù hợp" },
    { en: "improve", type: "v", ipa: "/im'pru:v/", vi: "cải thiện" },
    { en: "improvement", type: "n", ipa: "/&iuml;m'pru:v.mənt/", vi: "sự cải thiện, cải tiến" },
    { en: "incentive", type: "adj, n", ipa: "/in'sen.tv/", vi: "khuyến khích; sự khích lệ, thúc đẩy" },
    { en: "inclined", type: "adj", ipa: "/in'klaind/", vi: "có thiên hướng, khuynh hướng" },
    { en: "include", type: "v", ipa: "/in'klu:d/", vi: "bao gồm, gồm có" },
    { en: "inclusion", type: "n", ipa: "/ın'klu:.zən/", vi: "sự bao gồm, tính vào" },
    { en: "income", type: "n", ipa: "/m.kam/", vi: "thu nhập, lợi tức" },
    { en: "inconvenience", type: "n", ipa: "/ın.kən'vi.n.jəns/", vi: "sự bất tiện, phiền hà" },
    { en: "increase", type: "v, n", ipa: "/in'kri:s/", vi: "sự tăng lên; tăng thêm" },
    { en: "indicate", type: "v", ipa: "/'ın.də.kert/", vi: "chỉ ra, chứng tỏ, biểu thị" },
    { en: "indication", type: "n", ipa: "/ın.də'keı fən/", vi: "sự biểu thị, biểu lộ" },
    { en: "individual", type: "n, v", ipa: "/in.də'vidz.u.ǝl/", vi: "cá nhân; riêng lẻ, tách biệt" },
    { en: "individually", type: "adv", ipa: "/ın.də vidz.u.ə.li/", vi: "riêng lẻ" },
    { en: "inexperienced", type: "adj", ipa: "/in.ık'spır.i.ǝnst/", vi: "thiếu kinh nghiệm" },
    { en: "infer", type: "v", ipa: "/-f3/", vi: "suy ra, kết luận" },
    { en: "inflate", type: "v", ipa: "/in'flert/", vi: "bơm phồng, thổi phồng" },
    { en: "inflation", type: "n", ipa: "/in' fleı fən/", vi: "sự bơm phồng, lạm phát" },
    { en: "influence", type: "v", ipa: "/'ın.flu.ǝns/", vi: "ảnh hưởng, uy lực; chi phối, tác động" },
    { en: "influential", type: "adj", ipa: "/m.flu'en.fǝl/", vi: "có ảnh hưởng, có tác dụng" },
    { en: "information", type: "n", ipa: "/m.fə'mer.fan/", vi: "thông tin" },
    { en: "input", type: "n", ipa: "/in.pot/", vi: "dữ liệu đầu vào" },
    { en: "inquiry", type: "n", ipa: "/1n.kwa.i/", vi: "sự điều tra, thẩm vấn" },
    { en: "install", type: "v", ipa: "/in'sta:l/", vi: "cài đặt, tải xuống" },
    { en: "installation", type: "n", ipa: "/in.stə'leı fən/", vi: "sự cài đặt" },
    { en: "insurance", type: "n", ipa: "/in'f3.r.ǝns/", vi: "sự bảo hiểm, hợp đồng bảo hiểm" },
    { en: "insure", type: "v", ipa: "/in'for/", vi: "bảo hiểm, đảm bảo" },
    { en: "intend", type: "v", ipa: "/in'tend/", vi: "định, có ý định" },
    { en: "intention", type: "n", ipa: "/in'ten.fan/", vi: "dự định, ý định" },
    { en: "intently", type: "adv", ipa: "/in'tent.li/", vi: "chăm chú, chú ý" },
    { en: "intern", type: "n", ipa: "/in't3:n/", vi: "thực tập sinh" },
    { en: "internal", type: "adj", ipa: "/in't.nǝl/", vi: "bên trong, nội bộ" },
    { en: "international", type: "adj", ipa: "/m.tənæf.ǝn.ǝl/", vi: "quốc tế, đa quốc gia" },
    { en: "internship", type: "n", ipa: "/in.t3:n.fip/", vi: "kỳ thực tập" },
    { en: "interrupt", type: "v", ipa: "/.in.tǝ rapt/", vi: "làm gián đoạn, ngắt quãng" },
    { en: "interview", type: "n, v", ipa: "/m.tə.vju:/", vi: "phỏng vấn" },
    { en: "invaluable", type: "adj", ipa: "/in'væl.jǝ.bəl/", vi: "vô giá" },
    { en: "invent", type: "v", ipa: "/in'invent/", vi: "phát minh, sáng chế" },
    { en: "invention", type: "n", ipa: "/in'ven.fǝn/", vi: "sự phát minh, sáng kiến, sáng chế" },
    { en: "inventory", type: "n", ipa: "/'ın.vən.tɔ:r.i/", vi: "sự kiểm kê, bản kiểm kê" },
    { en: "invest", type: "v", ipa: "/invest/", vi: "đầu tư" },
    { en: "investigation", type: "n", ipa: "/&iuml;m ves.tə geı fən/", vi: "sự điều tra, nghiên cứu" },
    { en: "investment", type: "n", ipa: "/invest.mənt/", vi: "sự đầu tư, vốn đầu tư" },
    { en: "invite", type: "v", ipa: "/in'vait/", vi: "mời, rủ, lôi cuốn, hấp dẫn" },
    { en: "invoice", type: "n", ipa: "/'ın.VOIS/", vi: "hóa đơn" },
    { en: "isolate", type: "v", ipa: "/'ar.sǝ.leit/", vi: "cô lập, cách ly" },
    { en: "item", type: "n", ipa: "/'artǝm/", vi: "món đồ, tin tức" },
    { en: "itemize", type: "v", ipa: "/ar.tə.maiz/", vi: "trình bày thành từng khoản, từng món" },
    { en: "itinerary", type: "n", ipa: "/ar'tın.ǝ.rer.i/", vi: "hành trình, lịch trình" },
    { en: "jealous", type: "adj", ipa: "/dzel.ǝs/", vi: "ghen ghét, đố kỵ" },
    { en: "jeopardize", type: "v", ipa: "/dzep..darz/", vi: "gây nguy hại, đe dọa" },
    { en: "jeopardy", type: "n", ipa: "/dzep.a.di/", vi: "nguy cơ, sự nguy hiểm" },
    { en: "jobless", type: "adj", ipa: "/dza:b.las/", vi: "thất nghiệp, không có việc làm" },
    { en: "join", type: "v", ipa: "/dzəın/", vi: "nối, ghép, tham gia" },
    { en: "joint", type: "n, adj", ipa: "/dzoint/", vi: "mối nối, khớp; chung" },
    { en: "journal", type: "n", ipa: "/d33.nǝl/", vi: "báo, tạp chí" },
    { en: "journey", type: "n", ipa: "/d33:.ni/", vi: "cuộc hành trình" },
    { en: "judge", type: "n, v", ipa: "/d3ad3/", vi: "quan tòa, thẩm phán, người phán xử, xét xử" },
    { en: "justice", type: "n", ipa: "/'dzas.tis/", vi: "sự công bằng, luật pháp" },
    { en: "justification", type: "n", ipa: "/dzas.tə.fə keı fən/", vi: "sự bào chữa, biện hộ" },
    { en: "justify", type: "v", ipa: "/dzas.tə.fai/", vi: "bào chữa, phân bua, biện hộ" },
    { en: "keen", type: "adj", ipa: "/kin/", vi: "say mê, ham thích" },
    { en: "keep", type: "v", ipa: "/ki:p/", vi: "giữ lại, giam giữ" },
    { en: "knowledge", type: "n", ipa: "/'na:.lid3/", vi: "kiến thức, sự hiểu biết" },
    { en: "knowledgeable", type: "adj", ipa: "/nəlidzəbl/", vi: "thông thạo, thành thạo, am tường" },
    { en: "label", type: "n", ipa: "/'lerbl/", vi: "nhãn, nhãn hiệu" },
    { en: "labor", type: "n", ipa: "/'leiba/", vi: "lao động, công việc chân tay" },
    { en: "lack", type: "n, v", ipa: "/læk/", vi: "sự thiếu, thiếu sót" },
    { en: "landlord", type: "n", ipa: "/'lændlɔ:d/", vi: "chủ nhà (nhà cho thuê)" },
    { en: "laptop", type: "n", ipa: "/'læp.top/", vi: "máy tính" },
    { en: "launch", type: "n", ipa: "/lo:ntf/", vi: "Xuồng lớn" },
    { en: "law", type: "n", ipa: "/Λα:/", vi: "luật, nội quy, quy định" },
    { en: "lay", type: "n", ipa: "/lei/", vi: "bài thơ ngắn, bài vè ngắn" },
    { en: "leak", type: "n", ipa: "/li:k/", vi: "lỗ thủng, lỗ rò, khe hở" },
    { en: "lean", type: "n", ipa: "/li:n/", vi: "độ nghiêng, độ dốc" },
    { en: "lease", type: "n", ipa: "/li:s/", vi: "hợp đồng cho thuê (bất động sản)" },
    { en: "leisure", type: "n", ipa: "/'lizər, 'lezər/", vi: "thì giờ rỗi rãi, lúc thư nhàn" },
    { en: "lend", type: "v", ipa: "/lend/", vi: "cho vay, cho mượn" },
    { en: "liability", type: "n", ipa: "/laiǝ'biliti/", vi: "trách nhiệm pháp lý, nghĩa vụ pháp lý" },
    { en: "license", type: "n", ipa: "/lái:sn/", vi: "bản quyền" },
    { en: "licensing", type: "n", ipa: "/'lar.sən.sın/", vi: "sự cấp giấy phép" },
    { en: "lie", type: "n", ipa: "/lai/", vi: "sự nói dối, sự nói láo, dối trá" },
    { en: "limited", type: "adj", ipa: "/'lımıtıd/", vi: "có giới hạn, hạn chế" },
    { en: "limousine", type: "n", ipa: "/limə zi:n/", vi: "xe limousine" },
    { en: "list", type: "n", ipa: "/list/", vi: "danh sách, sổ, bản kê khai" },
    { en: "livestock", type: "n", ipa: "/'laiv stok/", vi: "vật nuôi, thú nuôi" },
    { en: "loan", type: "n", ipa: "/laon/", vi: "sự vay nợ" },
    { en: "lobby", type: "n", ipa: "/lpb.i/", vi: "hành lang" },
    { en: "local", type: "adj", ipa: "/'lǝuk( )l/", vi: "địa phương" },
    { en: "locate", type: "v", ipa: "/loo'keit/", vi: "trụ sở nằm ở" },
    { en: "log on", type: "v", ipa: "/log/", vi: "kết nối với hệ thống" },
    { en: "log", type: "n", ipa: "/log/", vi: "khúc gỗ mới đốn hạ" },
    { en: "loyal", type: "adj", ipa: "/loiǝl/", vi: "trung thành, trung nghĩa, trung kiên" },
    { en: "luggage", type: "n", ipa: "/'lagidz/", vi: "hành lý" },
    { en: "luxurious", type: "adj", ipa: "/lag zjuəriəs/", vi: "sang trọng, lộng lẫy; xa hoa" },
    { en: "luxury", type: "n", ipa: "/lak.fǝr.i/", vi: "sự xa xỉ, sự xa hoa" },
    { en: "maintain", type: "v", ipa: "/mein'tein/", vi: "giữ gìn, duy trì bảo vệ" },
    { en: "maintenance", type: "n", ipa: "/'meintənəns/", vi: "sự giữ gìn, sự duy trì; sự bảo vệ" },
    { en: "major", type: "n", ipa: "/meidzər/", vi: "chuyên đề" },
    { en: "manage", type: "v", ipa: "/'mænidz/", vi: "quản lý" },
    { en: "managerial", type: "adj", ipa: "/mæni dziəriəl/", vi: "(thuộc) người quản lý, (thuộc) giám đốc" },
    { en: "mandatory", type: "adj", ipa: "/'mændətəri/", vi: "có tính cách bắt buộc" },
    { en: "manufacture", type: "n", ipa: "/,mænju'fæktfǝ/", vi: "sự chế tạo, sự sản xuất" },
    { en: "manufacturing", type: "n", ipa: "/,mænju fæktfərin/", vi: "sự sản xuất, sự chế tạo; sự gia công" },
    { en: "marketing", type: "n", ipa: "/'ma:kitin/", vi: "tiếp thị" },
    { en: "mechanic", type: "n", ipa: "/mə'kænık/", vi: "thợ máy, công nhân cơ khí" },
    { en: "medical", type: "adj", ipa: "/'medika/", vi: "(thuộc) y học" },
    { en: "medication", type: "n", ipa: "/madı'keıfən/", vi: "sự bốc thuốc, sự cho thuốc" },
    { en: "medicine", type: "n", ipa: "/'medisn/", vi: "y học" },
    { en: "meeting", type: "n", ipa: "/'mi:tin/", vi: "cuộc mít tinh, cuộc biểu tình" },
    { en: "membership", type: "n", ipa: "/'membəsip/", vi: "tư cách hội viên, địa vị hội viên" },
    { en: "memorandum", type: "n", ipa: "/memə'rændəm/", vi: "bản ghi nhớ" },
    { en: "mention", type: "n", ipa: "/'menfn/", vi: "sự kể ra, sự nói đến, sự đề cập" },
    { en: "merchandise", type: "n", ipa: "/'mə:tfən, daiz/", vi: "hàng hóa" },
    { en: "mere", type: "n", ipa: "/miǝ/", vi: "ao hồ" },
    { en: "merge", type: "v", ipa: "/mǝ:ddz/", vi: "hoà vào; kết hợp; hợp nhất" },
    { en: "merger", type: "n", ipa: "/ mǝ:dzǝ/", vi: "sự liên doanh liên kết" },
    { en: "mileage", type: "n", ipa: "/'mailid3/", vi: "tổng số dặm đã đi được" },
    { en: "million", type: "n", ipa: "/'miljən/", vi: "một triệu" },
    { en: "mimic", type: "adj", ipa: "/'mimik/", vi: "giả; bắt chước" },
    { en: "mishear", type: "v", ipa: "/ mis hiǝ/", vi: "nghe lầm" },
    { en: "misleading", type: "adj", ipa: "/misli:din/", vi: "làm cho lạc đường, làm cho lạc lối" },
    { en: "misrepresent", type: "v", ipa: "/misrepri zent/", vi: "trình bày sai, miêu tả sai" },
    { en: "monitor", type: "n", ipa: "/'mǝnitǝ/", vi: "lớp trưởng, cán bộ lớp (ở trường học)" },
    { en: "monument", type: "n", ipa: "/mǝnjumǝnt/", vi: "vật kỷ niệm, đài kỷ niệm, bia kỷ niệm" },
    { en: "moral", type: "adj", ipa: "/mor.ǝl/", vi: "(thuộc) đạo đức, phẩm hạnh, tinh thần, bài học" },
    { en: "mortgage", type: "n", ipa: "/'mɔ:giddz/", vi: "cầm cố, thế chấp" },
    { en: "motivate", type: "v", ipa: "/'mouti veit/", vi: "thúc đẩy, làm động cơ thúc đẩy" },
    { en: "motivation", type: "n", ipa: "/,mouti'veifn/", vi: "sự thúc đẩy, động cơ thúc đẩy" },
    { en: "napkin", type: "n", ipa: "/'næpkin/", vi: "khăn ăn" },
    { en: "narrow", type: "adj", ipa: "/nærou/", vi: "hẹp, chật hẹp, eo hẹp" },
    { en: "narrowing", type: "n", ipa: "/'nærouwin/", vi: "sự thu hẹp, sự co hẹp" },
    { en: "neighborhood", type: "n", ipa: "/'neıbər hod/", vi: "hàng xóm" },
    { en: "network", type: "n", ipa: "/netwǝ:k/", vi: "lưới, đồ dùng kiểu lưới" },
    { en: "nominate", type: "v", ipa: "/'nomineit/", vi: "chỉ định, chọn, bổ nhiệm" },
    { en: "nomination", type: "n", ipa: "/nomi'neifn/", vi: "sự chỉ định, sự bổ nhiệm" },
    { en: "notice", type: "n", ipa: "/nǝtis/", vi: "thông tri, yết thị, thông báo" },
    { en: "notify", type: "v", ipa: "/nǝo.ti.far/", vi: "báo, khai báo; thông báo" },
    { en: "objection", type: "n", ipa: "/ǝb'dzek n/", vi: "sự phản đối, sự chống đối" },
    { en: "objective", type: "adj", ipa: "/ab'dzektiv/", vi: "khách quan" },
    { en: "obligation", type: "n", ipa: "/,obli'geifn/", vi: "nghĩa vụ; bổn phận" },
    { en: "oblige", type: "v", ipa: "/ə'blaidz/", vi: "bắt buộc, cưỡng bách; đặt nghĩa vụ cho" },
    { en: "obtain", type: "v", ipa: "/ǝb'tein/", vi: "đạt được, giành được, thu thu được" },
    { en: "obviously", type: "adv", ipa: "/'ǝbviəsli/", vi: "một cách rõ ràng; có thể thấy được" },
    { en: "occupation", type: "n", ipa: "/,ǝkju'peifn/", vi: "sự chiếm giữ, sự chiếm đóng" },
    { en: "occur", type: "v", ipa: "/ǝ'kǝ:/", vi: "xảy ra, xảy đến, xuất hiện, tìm thấy" },
    { en: "officer", type: "n", ipa: "/ǝfisǝ/", vi: "sĩ quan" },
    { en: "official", type: "adj", ipa: "/ə'fifəl/", vi: "(thuộc) chính quyền; (thuộc) văn phòng" },
    { en: "onward", type: "adj", ipa: "/'onwǝd/", vi: "về phía trước, tiến lên, hướng tới" },
    { en: "operate", type: "v", ipa: "/'opǝreit/", vi: "hoạt động đang làm việc, thi hành" },
    { en: "operation", type: "n", ipa: "/,ǝpǝ'reifn/", vi: "sự hoạt động, quá trình hoạt động" },
    { en: "opinion", type: "n", ipa: "/ə'pinjən/", vi: "ý kiến, quan điểm" },
    { en: "opportunity", type: "n", ipa: "/vpər tyuniti/", vi: "cơ hội, thời cơ, dịp may" },
    { en: "optimistic", type: "adj", ipa: "/optimistik/", vi: "lạc quan, yêu đời" },
    { en: "order", type: "n", ipa: "/dǝ/", vi: "thứ, bậc, ngôi, hàng, cấp, loại" },
    { en: "organization", type: "n", ipa: "/,:gənai'zeifn/", vi: "sự tổ chức, sự cấu tạo" },
    { en: "organize", type: "v", ipa: "/:gə, naiz/", vi: "tổ chức, cấu tạo, thiết lập" },
    { en: "organized", type: "adj", ipa: "/:r.gən.aızd/", vi: "có trật tự, ngăn nắp, hữu hiệu" },
    { en: "outline", type: "n", ipa: "/'aut, lain/", vi: "nét phác thảo, đề cương vạch nét chính" },
    { en: "outlook", type: "n", ipa: "/'aut luk/", vi: "quang cảnh, viễn cảnh" },
    { en: "outstanding", type: "adj", ipa: "/aut'stændin/", vi: "nổi bật, đáng chú ý; nổi tiếng, vượt trội" },
    { en: "overall", type: "adj", ipa: "/ouvǝrǝl/", vi: "toàn bộ, toàn thể, bao gồm mọi thứ" },
    { en: "overdraft", type: "n", ipa: "/'ouvǝ,dra:ft/", vi: "số tiền chi trội; số tiền rút quá số gửi" },
    { en: "overtime", type: "adj", ipa: "/'ouvǝtaim/", vi: "quá giờ, ngoài giờ (quy định)" },
    { en: "overview", type: "n", ipa: "/ouvǝ vju:/", vi: "sự khái quát; miêu tả chung, ngắn gọn" },
    { en: "owe", type: "v", ipa: "/ou/", vi: "nợ, hàm ơn" },
    { en: "package", type: "v", ipa: "/pæk.1d3/", vi: "đóng gói, đóng kiện, xếp vào bao bì" },
    { en: "package_n", type: "n", ipa: "/pæk.1d3/", vi: "gói đồ, bưu kiện; thùng hàng" },
    { en: "parcel", type: "n", ipa: "/'pa:s( )l/", vi: "gói; bưu kiện" },
    { en: "parking", type: "n", ipa: "/'pa:r.kim/", vi: "bãi đỗ xe" },
    { en: "participant", type: "n", ipa: "/pa: tisipǝnt/", vi: "người tham gia, người tham dự" },
    { en: "particularly", type: "adv", ipa: "/pə tikjuləli/", vi: "đặc biệt, đặc thù cá biệt, riêng biệt" },
    { en: "passenger", type: "n", ipa: "/pæsinddza/", vi: "hành khách (đi tàu xe...)" },
    { en: "patent", type: "adj", ipa: "/'peitənt/", vi: "tài tình, khéo léo, tinh xảo" },
    { en: "patented", type: "adj", ipa: "/'pertəntıd, 'pætǝntıd/", vi: "đã có bằng sáng chế, môn bài" },
    { en: "patience", type: "n", ipa: "/'peifəns/", vi: "tính kiên nhẫn, kiên trì, bền chí" },
    { en: "payment", type: "n", ipa: "/'peim( )nt/", vi: "sự trả tiền, số tiền trả; bồi thường" },
    { en: "perform", type: "v", ipa: "/pǝ'fo:m/", vi: "biểu diễn, trình diễn (kịch, nhảy...)" },
    { en: "performance", type: "n", ipa: "/pǝ'fə məns/", vi: "sự biểu diễn, cuộc biểu diễn" },
    { en: "permanent", type: "adj", ipa: "/pə mənənt/", vi: "lâu dài, vĩnh cửu; thường xuyên" },
    { en: "permission", type: "n", ipa: "/pǝ'mifn/", vi: "sự cho phép, sự chấp nhận; giấy phép" },
    { en: "permit", type: "v", ipa: "/'pər'mit/", vi: "cho phép, cho cơ hội; thừa nhận" },
    { en: "personal", type: "adj", ipa: "/'pǝ:snl/", vi: "cá nhân, tư, riêng" },
    { en: "personalized", type: "v", ipa: "/'pəzsənə laiz/", vi: "cá nhân hóa" },
    { en: "personnel", type: "n", ipa: "/pǝ:sə'nel/", vi: "nhân viên, công chức (cơ quan...)" },
    { en: "persuade", type: "v", ipa: "/pǝ'sweid/", vi: "thuyết phục" },
    { en: "pessimistic", type: "adj", ipa: "/pesi mistik/", vi: "bi quan, yếm thế" },
    { en: "plant", type: "n", ipa: "/plænt, plant/", vi: "thực vật" },
    { en: "platform", type: "n", ipa: "/'plætfo:m/", vi: "nền, bục, bệ" },
    { en: "pleasant", type: "adj", ipa: "/plezǝnt/", vi: "vui vẻ, dễ thương (người...)" },
    { en: "plow", type: "n", ipa: "/plau/", vi: "cái cày; công cụ giống cái cày" },
    { en: "plug", type: "n", ipa: "/plag/", vi: "phích cắm, ổ cắm điện" },
    { en: "plumber", type: "n", ipa: "/plamǝ/", vi: "thợ hàn chì, thợ ống nước" },
    { en: "point", type: "n", ipa: "/point/", vi: "điểm" },
    { en: "pointless", type: "adj", ipa: "/'pointlis/", vi: "vô nghĩa, không ý vị, lạc lõng" },
    { en: "policy", type: "n", ipa: "/polisi/", vi: "chính sách (của chính phủ, đảng...)" },
    { en: "polite", type: "adj", ipa: "/pǝ'lait/", vi: "lễ phép, có lễ độ; lịch sự, lịch thiệp" },
    { en: "politician", type: "n", ipa: "/,pulǝ'tıfn/", vi: "nhà chính trị, chính khách" },
    { en: "politics", type: "n", ipa: "/'politiks/", vi: "hoạt động chính trị, công việc chính trị" },
    { en: "poll", type: "n", ipa: "/poul/", vi: "sự bầu cử, số phiếu bầu" },
    { en: "pollute", type: "v", ipa: "/pǝ'lut/", vi: "làm ô nhiễm, làm nhơ bẩn (nước...)" },
    { en: "popular", type: "adj", ipa: "/'pa.pjələr/", vi: "được nhiều người ưa chuộng, ngưỡng mộ" },
    { en: "popularity", type: "n", ipa: "/pppyǝ'lærıti/", vi: "tính đại chúng, tính phổ biến" },
    { en: "position", type: "n", ipa: "/pəzifən/", vi: "vị trí, chỗ (của một vật gì)" },
    { en: "postpone", type: "v", ipa: "/pǝost pǝon/", vi: "hoãn lại, trì hoãn" },
    { en: "postponement", type: "n", ipa: "/poust pounmənt/", vi: "sự trì hoãn" },
    { en: "potential", type: "adj", ipa: "/pǝtenfl/", vi: "tiềm năng; tiềm tàng" },
    { en: "power", type: "n", ipa: "/pauǝ(r)/", vi: "khả năng; tài năng, năng lực" },
    { en: "practical", type: "adj", ipa: "/præktıkəl/", vi: "thực hành (đối với lý thuyết)" },
    { en: "practically", type: "adv", ipa: "/'præktikəli/", vi: "về mặt thực hành" },
    { en: "predict", type: "v", ipa: "/pri'dikt/", vi: "nói trước, tiên đoán, dự đoán" },
    { en: "predictable", type: "adj", ipa: "/pri'diktəbl/", vi: "có thể đoán trước, có thể dự đoán" },
    { en: "prefer", type: "v", ipa: "/pri'fǝ:/", vi: "thích hơn, ưa hơn" },
    { en: "preference", type: "n", ipa: "/prefərəns/", vi: "sở thích; sự thích hơn, sự ưa hơn" },
    { en: "premises", type: "n", ipa: "/'premis/", vi: "biệt thự" },
    { en: "present", type: "n", ipa: "/prezant/", vi: "hiện tại, hiện thời, hiện giờ" },
    { en: "press", type: "n", ipa: "/press/", vi: "sự ép, sự nén, sự bóp, sự ấn" },
    { en: "prevent", type: "v", ipa: "/pri'vent/", vi: "ngăn cản; ngăn chặn, ngăn ngừa" },
    { en: "prevention", type: "n", ipa: "/pri'ven n/", vi: "sự ngăn cản, sự ngăn trở" },
    { en: "priceless", type: "adj", ipa: "/'praıslıs/", vi: "vô giá; không định giá được" },
    { en: "principle", type: "n", ipa: "/printsipl/", vi: "gốc, nguồn gốc, yếu tố cơ bản" },
    { en: "priority", type: "n", ipa: "/prai'ǝriti/", vi: "sự ưu thế (về cấp bậc); quyền ưu tiên" },
    { en: "private", type: "adj", ipa: "/'prarvit/", vi: "riêng, tư, cá nhân" },
    { en: "probability", type: "n", ipa: "/probə'bılıti/", vi: "sự có thể có, khả năng có thể xảy ra" },
    { en: "probably", type: "adv", ipa: "/'prəbəbli/", vi: "có khả năng, có lẽ, có thể" },
    { en: "probationary", type: "adj", ipa: "/prǝ beifənəri/", vi: "đang trong thời gian thử thách" },
    { en: "process", type: "n", ipa: "/'prouses/", vi: "quá trình, sự tiến triển" },
    { en: "profession", type: "n", ipa: "/prǝ fef( )n/", vi: "nghề, nghề nghiệp" },
    { en: "professional", type: "adj", ipa: "/prǝ'fefǝnl/", vi: "(thuộc) nghề nghiệp; có tay nghề" },
    { en: "profile", type: "n", ipa: "/'proufail/", vi: "tiểu sử sơ lược; mô tả sơ lược" },
    { en: "profit", type: "n", ipa: "/'profit/", vi: "thuận lợi, lợi ích, bổ ích" },
    { en: "profitability", type: "n", ipa: "/'profitə biləti/", vi: "sự có lợi, sự có ích" },
    { en: "profitable", type: "adj", ipa: "/'pra:fıtəbl/", vi: "có lợi, có ích; thuận lợi" },
    { en: "progressive", type: "adj", ipa: "/prǝ gresiv/", vi: "tiến lên, tiến tới" },
    { en: "prohibit", type: "v", ipa: "/proo'hibit/", vi: "cấm, ngăn cấm" },
    { en: "project", type: "n", ipa: "/prodzekt/", vi: "đề án, dự án; kế hoạch" },
    { en: "promote", type: "v", ipa: "/prǝ'moot/", vi: "thăng chức, thăng cấp; đề bạt" },
    { en: "promotion", type: "n", ipa: "/prǝ'moun/", vi: "sự thăng chức, sự đề bạt" },
    { en: "promptly", type: "adv", ipa: "/promptli/", vi: "mau lẹ, nhanh chóng; ngay lập tức" },
    { en: "properly", type: "adv", ipa: "/'prəpəli/", vi: "đúng đắn, hợp thức, hợp lệ" },
    { en: "property", type: "n", ipa: "/'propǝti/", vi: "tài sản, của cải, vật sở hữu" },
    { en: "protect", type: "v", ipa: "/prǝ'tekt/", vi: "bảo vệ, bảo hộ, che chở" },
    { en: "protection", type: "n", ipa: "/prǝ'tek n/", vi: "sự bảo vệ, sự bảo hộ, sự che chở" },
    { en: "publicity", type: "n", ipa: "/pab'lısǝtı/", vi: "sự công khai" },
    { en: "publicize", type: "v", ipa: "/'pabli, saiz/", vi: "đưa ra công khai; làm cho thiên hạ biết" },
    { en: "purchase", type: "n", ipa: "/'pa:tfas/", vi: "sự mua, tậu; vật mua được" },
    { en: "purpose", type: "n", ipa: "/' :pǝs/", vi: "mục đích, ý định" },
    { en: "pursue", type: "v", ipa: "/pa'sju:/", vi: "đuổi theo, đuổi bắt, truy nã" },
    { en: "qualification", type: "n", ipa: "/kwalifi'keiSn/", vi: "phẩm chất, năng lực" },
    { en: "qualified", type: "adj", ipa: "/kwplə, fard/", vi: "đủ tư cách, khả năng, điều kiện" },
    { en: "qualify", type: "v", ipa: "/kwoli fai/", vi: "đủ tư cách, khả năng, điều kiện" },
    { en: "questionnaire", type: "n", ipa: "/kwestfə neǝr/", vi: "bản câu hỏi khảo sát" },
    { en: "quotation", type: "n", ipa: "/kwou'teifn/", vi: "sự trích dẫn, sự được trích dẫn" },
    { en: "quote", type: "n", ipa: "/kwout/", vi: "lời trích dẫn; đoạn trích dẫn" },
    { en: "range", type: "n", ipa: "/reind3/", vi: "dãy, hàng" },
    { en: "rare", type: "adj", ipa: "/rea/", vi: "hiếm, hiếm có, ít có" },
    { en: "rate", type: "n", ipa: "/reit/", vi: "tỷ lệ" },
    { en: "rational", type: "adj", ipa: "/'ræfənəl/", vi: "có lý trí, dựa trên lý trí" },
    { en: "raw", type: "adj", ipa: "/ro:/", vi: "sống, thô" },
    { en: "reach", type: "n", ipa: "/ri:tf/", vi: "sự chìa ra, sự trải ra" },
    { en: "realize", type: "v", ipa: "/riǝlaiz/", vi: "thấy rõ, hiểu rõ, nhận thức rõ" },
    { en: "rearrange", type: "v", ipa: "/'ri:ǝ'reinddz/", vi: "sắp xếp lại, bố trí lại" },
    { en: "reasonable", type: "adj", ipa: "/'ri:zənəbl/", vi: "có lý, hợp lý" },
    { en: "reasonably", type: "adv", ipa: "/ri:.zən.ə.bli/", vi: "hợp lý" },
    { en: "receipt", type: "n", ipa: "/ri'si:t/", vi: "đơn biên nhận, công thức nấu ăn" },
    { en: "receive", type: "v", ipa: "/ri'si:v/", vi: "nhận, lĩnh, thu" },
    { en: "recent", type: "adj", ipa: "/'ri:sənt/", vi: "gần đây, xảy ra gần đây" },
    { en: "reception", type: "n", ipa: "/ri'sep n/", vi: "sự nhận, sự thu nhận, quầy tiếp tân" },
    { en: "receptive", type: "adj", ipa: "/ri'septiv/", vi: "dễ tiếp thu, dễ lĩnh hội" },
    { en: "recipe", type: "n", ipa: "/resǝpi/", vi: "công thức làm món ăn" },
    { en: "recognize", type: "v", ipa: "/'rekǝgnaiz/", vi: "công nhận, thừa nhận, chấp nhận" },
    { en: "recommend", type: "v", ipa: "/rekǝ'mend/", vi: "giới thiệu, tiến cử" },
    { en: "recommendation", type: "n", ipa: "/rekəmen deifən/", vi: "sự giới thiệu, sự tiến cử" },
    { en: "recruit", type: "v", ipa: "/ri'kru:t/", vi: "tuyển, chiêu mộ (lính mới); tìm thêm" },
    { en: "recruitment", type: "n", ipa: "/ri'kru;tm( )nt/", vi: "sự tuyển mộ, sự lấy thêm" },
    { en: "reduce", type: "v", ipa: "/ri'dju:s/", vi: "thu nhỏ, làm giảm bớt" },
    { en: "reduction", type: "n", ipa: "/ri'dakfǝn/", vi: "sự thu nhỏ, sự giảm bớt" },
    { en: "redundant", type: "adj", ipa: "/ri'dandǝnt/", vi: "thừa, dư" },
    { en: "refrigerator", type: "n", ipa: "/ri'fridz.ǝr.er.tər/", vi: "tủ lạnh" },
    { en: "refund", type: "n, v", ipa: "/rifand/", vi: "trả lại, sự trả lại tiền" },
    { en: "refundable", type: "adj", ipa: "/ri'fandǝbl/", vi: "có thể được trả lại tiền" },
    { en: "refusal", type: "n", ipa: "/rifju:zl/", vi: "sự từ chối, sự khước từ" },
    { en: "refuse", type: "v", ipa: "/rn'fyuz/", vi: "từ chối, khước từ, cự tuyệt" },
    { en: "regarding", type: "n", ipa: "/ri'ga:din/", vi: "về việc, đối với (vấn đề...)" },
    { en: "regardless", type: "adv", ipa: "/ri'ga:dlis/", vi: "bất chấp, không đếm xỉa tới" },
    { en: "regional", type: "adj", ipa: "/'ridzənl/", vi: "(thuộc) vùng; địa phương" },
    { en: "registration", type: "n", ipa: "/,reddzis'treifn/", vi: "sự đăng ký, sự ghi vào sổ" },
    { en: "regret", type: "n, v", ipa: "/ri'gret/", vi: "hối tiếc; sự ân hận" },
    { en: "regular", type: "adj", ipa: "/reg.jǝ.la/", vi: "đều đặn, thường xuyên" },
    { en: "regularly", type: "adv", ipa: "/'regjuləli/", vi: "đều đặn, thường xuyên" },
    { en: "regulate", type: "v", ipa: "/reg.jǝ.leit/", vi: "điều khiển" },
    { en: "reject", type: "n, v", ipa: "/'ri:dzekt/", vi: "vật bị loại, từ chối" },
    { en: "relax", type: "v", ipa: "/r1'læks/", vi: "thư giãn, nghỉ ngơi" },
    { en: "relaxation", type: "n", ipa: "/ri:læk seifən/", vi: "sự dịu đi, sự bớt căng thẳng" },
    { en: "release", type: "v", ipa: "/n'li:s/", vi: "thả ra, trả lại tự do" },
    { en: "relevant", type: "adj", ipa: "/'reləvənt/", vi: "thích đáng, thích hợp; xác đáng" },
    { en: "remain", type: "v", ipa: "/rı'mein/", vi: "duy trì, còn lại" },
    { en: "remarkable", type: "adj", ipa: "/ri'ma:kǝb(ə)l/", vi: "đáng chú ý, đáng để ý" },
    { en: "remind", type: "v", ipa: "/ri'maind/", vi: "nhắc lại, nhớ lại" },
    { en: "reminder", type: "n", ipa: "/ri'maində/", vi: "vật làm nhớ lại, cái làm nhớ lại" },
    { en: "remittance", type: "n", ipa: "/ri&acute;mitəns/", vi: "sự gửi tiền, tiền gửi hàng" },
    { en: "remove", type: "v", ipa: "/ri'mu:v/", vi: "dời đi, di chuyển, dọn dẹp" },
    { en: "remuneration", type: "n", ipa: "/rı,mju:.nə reı fən/", vi: "thù lao, tiền trả công" },
    { en: "renovate", type: "v", ipa: "/rena veit/", vi: "nâng cấp, cải tiến, sửa chữa lại" },
    { en: "renovation", type: "n", ipa: "/ren.ǝ'ver.Jǝn/", vi: "sự nâng cấp, sự cải tiến" },
    { en: "rent", type: "n", ipa: "/rent/", vi: "sự thuê mướn" },
    { en: "repair", type: "v", ipa: "/ri'per/", vi: "sửa chữa, sửa đổi" },
    { en: "repayment", type: "n", ipa: "/ri: peimənt/", vi: "sự trả lại" },
    { en: "repetitive", type: "adj", ipa: "/ri'pet.ǝ.tv/", vi: "có đặc trưng lặp đi lặp lại" },
    { en: "replace", type: "v", ipa: "/ripleis/", vi: "thay thế, thay chỗ ai cái gì" },
    { en: "replacement", type: "n", ipa: "/rı'pleis.mənt/", vi: "sự thay thế, vật thay thế" },
    { en: "report", type: "n", ipa: "/ri'pɔ:t/", vi: "bản báo cáo, bản tường thuật" },
    { en: "represent", type: "v", ipa: "/rep.ri'zent/", vi: "miêu tả, hình dung, đại diện" },
    { en: "representative", type: "adj", ipa: "/,repri'zentǝtiv/", vi: "miêu tả, biểu hiện, người đại diện" },
    { en: "request", type: "n", ipa: "/ri'kwest/", vi: "yêu cầu" },
    { en: "require", type: "v", ipa: "/ri'kwaiǝ(r)/", vi: "đòi hỏi, yêu cầu; quy định" },
    { en: "requirement", type: "n", ipa: "/rı'waır.mənt/", vi: "yêu cầu, cần thiết" },
    { en: "reschedule", type: "v", ipa: "/ri: 'skedz.u:l/", vi: "lên lịch, sắp xếp lịch" },
    { en: "rescue", type: "v", ipa: "/res.kju:/", vi: "cứu ai đó khỏi nguy hiểm" },
    { en: "resemble", type: "v", ipa: "/rizem.bǝl/", vi: "giống nhau, giống ai đó" },
    { en: "reservation", type: "n", ipa: "/reza'ver.fǝn/", vi: "sự đặt chỗ trước, dự phòng" },
    { en: "resign", type: "v", ipa: "/rı'zain/", vi: "bỏ việc, từ chức" },
    { en: "resist", type: "v", ipa: "/rIZIST/", vi: "chống lại" },
    { en: "resolve", type: "n, v", ipa: "/πι'ζα:/", vi: "quyết tâm, ý kiên quyết, giải quyết" },
    { en: "respect", type: "n", ipa: "/ri'spekt/", vi: "sự kính trọng, sự ngưỡng mộ" },
    { en: "respectable", type: "adj", ipa: "/ris'pektəbl/", vi: "đáng trọng, đáng kính" },
    { en: "respond", type: "v", ipa: "/ri'spond/", vi: "hưởng ứng, phản hồi" },
    { en: "responsibility", type: "n", ipa: "/rı,span.sə bıl.ə.ti/", vi: "trách nhiệm, nghĩa vụ" },
    { en: "responsible", type: "adj", ipa: "/ri'spənsəbl/", vi: "chịu trách nhiệm" },
    { en: "restructure", type: "v", ipa: "/ri: straktfǝ/", vi: "cơ cấu lại, tổ chức lại" },
    { en: "resume", type: "v", ipa: "/ri'zju:m/", vi: "lấy lại, hồi phục lại, sơ yếu lý lịch" },
    { en: "retail", type: "n, adv", ipa: "/'riteil, ri'teil/", vi: "sự bán lẻ, việc bán lẻ" },
    { en: "retire", type: "v", ipa: "/ritaiǝ/", vi: "nghỉ hưu, rút về" },
    { en: "retirement", type: "n", ipa: "/rı tarǝrmənt/", vi: "sự ẩn dật, sự về hưu" },
    { en: "revamp", type: "v", ipa: "/ri: 'væmp/", vi: "tân trang, sửa chữa" },
    { en: "revise", type: "v, n", ipa: "/ri'vaiz/", vi: "đọc lại, xem lại, duyệt lại" },
    { en: "revised", type: "v, n", ipa: "/ri'vaiz/", vi: "đã được chỉnh sửa, xem lại" },
    { en: "right", type: "n", ipa: "/rait/", vi: "điều tốt, điều đứng đắn, quyền lợi" },
    { en: "rival", type: "n, adj", ipa: "/raivl/", vi: "đối thủ, địch thủ, đối địch" },
    { en: "roadside", type: "n, adj", ipa: "/'roud said/", vi: "bờ đường, lề đường" },
    { en: "roughly", type: "adv", ipa: "/rafli/", vi: "gồ ghề, xấp xỉ, khoảng chừng" },
    { en: "route", type: "n", ipa: "/raut/", vi: "tuyến đường, lộ trình; đường đi" },
    { en: "runway", type: "n", ipa: "/'ran wei/", vi: "đường băng" },
    { en: "salary", type: "n", ipa: "/sæləri/", vi: "tiền lương" },
    { en: "sale", type: "n", ipa: "/seil/", vi: "sự bán, việc bán" },
    { en: "salvage", type: "n", ipa: "/'sælvid3/", vi: "sự cứu hộ, cứu tài sản khỏi tai nạn" },
    { en: "sample", type: "n", ipa: "/'sa:mpl/", vi: "mẫu; vật mẫu, hàng mẫu" },
    { en: "satisfactory", type: "adj", ipa: "/sætis'fæktəri/", vi: "vừa lòng, vừa ý thỏa mãn" },
    { en: "satisfied", type: "adj", ipa: "/'sætisfaid/", vi: "cảm thấy hài lòng, vừa ý" },
    { en: "satisfy", type: "v", ipa: "/'sætisfai/", vi: "làm thỏa mãn, làm hài lòng" },
    { en: "save", type: "v", ipa: "/seiv/", vi: "cứu nguy, tiết kiệm, lưu" },
    { en: "savvy", type: "n", ipa: "/'sæv.i/", vi: "sự hiểu biết, nắm rõ" },
    { en: "scene", type: "n", ipa: "/si:n/", vi: "quang cảnh, hiện trường" },
    { en: "scenery", type: "n", ipa: "/'si:nəri/", vi: "phong cảnh, cảnh vật" },
    { en: "schedule", type: "n", ipa: "/'skedzu:l/", vi: "kế hoạch làm việc, lịch trình" },
    { en: "scrutinize", type: "v", ipa: "/skru:ti naiz/", vi: "chăm chú nhìn kỹ, xem xét kỹ lưỡng" },
    { en: "search", type: "n, v", ipa: "/sǝ:t/", vi: "sự tìm kiếm, thăm dò" },
    { en: "secluded", type: "adj", ipa: "/si'klu:did/", vi: "hẻo lánh; vắng vẻ" },
    { en: "secretarial", type: "adj", ipa: "/sekri teəriəl/", vi: "(thuộc) thư ký" },
    { en: "secretary", type: "n", ipa: "/'sekrǝtri/", vi: "thư ký" },
    { en: "select", type: "v", ipa: "/si'lekt/", vi: "lựa chọn, chọn lọc, tuyển chọn" },
    { en: "selection", type: "n", ipa: "/si'lekfn/", vi: "sự lựa chọn, sự chọn lọc" },
    { en: "selective", type: "adj", ipa: "/si'lektiv/", vi: "có tuyển chọn" },
    { en: "seminar", type: "n", ipa: "/semi'na:/", vi: "hội nghị chuyên đề" },
    { en: "senior", type: "adj", ipa: "/sinia/", vi: "nhiều tuổi hơn; cao hơn về cấp bậc" },
    { en: "sequel", type: "n", ipa: "/si.kwǝl/", vi: "sự tiếp tục, nối tiếp, phần sau" },
    { en: "serious", type: "adj", ipa: "/'siəriəs/", vi: "đứng đắn, nghiêm trang, nghiêm trọng" },
    { en: "service", type: "n", ipa: "/sǝ:vis/", vi: "sự phục vụ, dịch vụ" },
    { en: "several", type: "adj", ipa: "/'sevrǝl/", vi: "vài, dăm ba" },
    { en: "shape", type: "n", ipa: "/feip/", vi: "hình dạng, hình thù" },
    { en: "sharp", type: "adj", ipa: "/Sarp/", vi: "sắc, nhọn, bén" },
    { en: "shift", type: "n", ipa: "/fift/", vi: "ca làm việc, sự thay đổi vị trí" },
    { en: "shine", type: "n, v", ipa: "/Jain/", vi: "ánh sáng; chói sáng, tỏa sáng" },
    { en: "shipment", type: "n", ipa: "/Jipmənt/", vi: "việc gửi hàng, lô hàng" },
    { en: "shipping", type: "n", ipa: "/fip.in/", vi: "sự vận chuyển, đang chuyển hàng" },
    { en: "shortage", type: "n", ipa: "/fɔ:r.tid3/", vi: "sự thiếu hụt, thiếu sót" },
    { en: "shuttle", type: "n", ipa: "/Sat.ǝl/", vi: "xe đưa đón" },
    { en: "sightseeing", type: "n", ipa: "/'sait, si:.11/", vi: "tham quan, ngắm cảnh" },
    { en: "significant", type: "adj", ipa: "/sig'nıf.ə.kənt/", vi: "quan trọng, đáng kể" },
    { en: "simplify", type: "v", ipa: "/'sım.plǝ.far/", vi: "đơn giản hóa" },
    { en: "situation", type: "n", ipa: "/sits.u'er.fǝn/", vi: "tình hình, tình huống" },
    { en: "slump", type: "v", ipa: "/slamp/", vi: "sự sụt giảm nhanh" },
    { en: "software", type: "n", ipa: "/'sa:ft.wer/", vi: " phần mềm" },
    { en: "solar", type: "adj", ipa: "/sou.la/", vi: "thuộc hệ mặt trời, năng lượng mặt trời" },
    { en: "spacious", type: "adj", ipa: "/'sper.fǝs/", vi: "rộng rãi" },
    { en: "spare part", type: "n", ipa: "/'speǝr 'part/", vi: "phụ tùng thay thế" },
    { en: "spare time", type: "n", ipa: "/'speǝr 'tarm/", vi: "thời gian rảnh" },
    { en: "specialize", type: "v", ipa: "/spes.ə.laız/", vi: "chuyên môn hóa" },
    { en: "specialty", type: "n", ipa: "/'spef.ǝl.ti/", vi: "chuyên môn, đặc sản" },
    { en: "specification", type: "n", ipa: "/spes.ə.fə keı fən/", vi: "chi tiết, thông số kỹ thuật" },
    { en: "specify", type: "v", ipa: "/'spes.ǝ.fai/", vi: "giải thích, chỉ rõ" },
    { en: "spectator", type: "n", ipa: "/spek ter.to/", vi: "khán giả (xem thể thao...)" },
    { en: "stable", type: "adj", ipa: "/ster.bal/", vi: "ổn định" },
    { en: "stadium", type: "n", ipa: "/'ster.di.ǝm/", vi: "sân vận động" },
    { en: "staff", type: "n", ipa: "/stæf/", vi: "nhân viên, đội ngũ" },
    { en: "stapler", type: "n", ipa: "/'ster.pla/", vi: "cái dập ghim" },
    { en: "stare", type: "v", ipa: "/ster/", vi: "nhìn chằm chằm" },
    { en: "starter", type: "n", ipa: "/'star.to/", vi: "người ra lệnh xuất phát, món khai vị" },
    { en: "stationery", type: "n", ipa: "/'ster.fǝ.ner.i/", vi: "văn phòng phẩm" },
    { en: "steep", type: "adj", ipa: "/sti:p/", vi: "dốc, quá quắt, đắt đỏ" },
    { en: "stock", type: "n", ipa: "/sta:k/", vi: "kho hàng, cổ phiếu, kho dự trữ" },
    { en: "strategic", type: "adj", ipa: "/strǝ'ti:.dzık/", vi: "mang tính chiến lược" },
    { en: "strategy", type: "v", ipa: "/'strætǝdzı/", vi: "chiến lược" },
    { en: "streamline", type: "v", ipa: "/'stri:m.lain/", vi: "tối ưu hóa, hợp lý hóa" },
    { en: "strike", type: "v, n", ipa: "/straik/", vi: "đình công, đánh đập" },
    { en: "studio", type: "n", ipa: "/'stu:.di.o0/", vi: "phòng thu âm, xưởng phim" },
    { en: "stunning", type: "adj", ipa: "/'stan.im/", vi: "tuyệt vời, lộng lẫy, làm kinh ngạc" },
    { en: "submit", type: "v", ipa: "/sǝb'mit/", vi: "nộp, xác nhận, gửi đi" },
    { en: "subscribe", type: "v", ipa: "/səb skraib/", vi: "đăng ký (dịch vụ, kênh...)" },
    { en: "subscription", type: "n", ipa: "/səb'skrıp.fən/", vi: "sự đăng ký, bao thuê" },
    { en: "subsidiary", type: "adj, n", ipa: "/sǝb'sıd.i.er.i/", vi: "công ty con, phụ thuộc" },
    { en: "suffocate", type: "v", ipa: "/saf.ǝ.kert/", vi: "làm ngạt, bóp nghẹt" },
    { en: "suggest", type: "v", ipa: "/sə'dzest/", vi: "đề xuất, gợi ý" },
    { en: "suggestion", type: "n", ipa: "/sə'dzes.tfən/", vi: "sự đề xuất, lời gợi ý" },
    { en: "suit", type: "n, v", ipa: "/su:t/", vi: "bộ vest, phù hợp" },
    { en: "suitability", type: "n", ipa: "/su..tə bıl.ə.ti/", vi: "sự thích hợp" },
    { en: "suitable", type: "adj", ipa: "/su..tə.bǝl/", vi: "phù hợp, thích hợp" },
    { en: "supervise", type: "v", ipa: "/'su..pa.vaiz/", vi: "giám sát" },
    { en: "supervision", type: "n", ipa: "/su.pə viz.ən/", vi: "sự giám sát" },
    { en: "supplier", type: "n", ipa: "/sə'plaza/", vi: "nhà cung cấp" },
    { en: "supply", type: "v", ipa: "/sə'plaı/", vi: "cung cấp" },
    { en: "support", type: "v", ipa: "/sə'pɔ:rt/", vi: "trợ giúp, ủng hộ" },
    { en: "supporter", type: "n", ipa: "/sə'pɔ:rta/", vi: "người trợ giúp, cổ động viên" },
    { en: "surrounding", type: "adj", ipa: "/sə'raon.dın/", vi: "bao quanh, xung quanh" },
    { en: "suspicious", type: "adj", ipa: "/sə'spis.ǝs/", vi: "khả nghi, nghi ngờ" },
    { en: "switchboard", type: "n", ipa: "/'switf.bo:rd/", vi: "tổng đài điện thoại" },
    { en: "systematic", type: "adj", ipa: "/sis.tə'mæt.ik/", vi: "có hệ thống, bài bản" },
    { en: "takeover", type: "n", ipa: "/'teik,ou.va/", vi: "tiếp quản, thôn tính công ty" },
    { en: "tax", type: "n", ipa: "/tæks/", vi: "thuếu" },
    { en: "technical", type: "adj", ipa: "/'tek.nı.kǝl/", vi: "có tính kỹ thuật" },
    { en: "technician", type: "n", ipa: "/tek'nıf.ǝn/", vi: "kỹ thuật viên" },
    { en: "temporary", type: "adj", ipa: "/tem.pǝ.rer.i/", vi: "tạm thời" },
    { en: "tenant", type: "n", ipa: "/ten.ǝnt/", vi: "người thuê nhà" },
    { en: "terminate", type: "v", ipa: "/'13.mǝ.net/", vi: "chấm dứt, kết thúc" },
    { en: "terrible", type: "adj", ipa: "/'ter.ə.bǝl/", vi: "kinh khủng, tồi tệ" },
    { en: "terrific", type: "adj", ipa: "/ta'rif.ik/", vi: "tuyệt vời, khủng khiếp" },
    { en: "theoretical", type: "adj", ipa: "/0i.ǝret.kǝl/", vi: "mang tính lý thuyết" },
    { en: "theory", type: "n", ipa: "/'0ır.i/", vi: "học thuyết, lý thuyết" },
    { en: "thorough", type: "adj", ipa: "/032/", vi: "triệt để, cẩn thận" },
    { en: "tidy", type: "adj", ipa: "/'tar.di/", vi: "ngăn nắp, gọn gàng" },
    { en: "tip", type: "n", ipa: "/tip/", vi: "tiền boa, mẹo nhỏ, đầu mút" },
    { en: "tour", type: "n", ipa: "/tor/", vi: "chuyến du lịch, chuyến tham quan" },
    { en: "tourism", type: "n", ipa: "/tor.1.zəm/", vi: "ngành du lịch" },
    { en: "tourist", type: "n", ipa: "/tor.ist/", vi: "du khách" },
    { en: "towel", type: "n", ipa: "/tavǝl/", vi: "cái khăn lau, khăn tắm" },
    { en: "tower", type: "n", ipa: "/'tau.a/", vi: "tòa nhà, tháp" },
    { en: "track", type: "n", ipa: "/træk/", vi: "con đường, đường ray, theo dõi" },
    { en: "trade", type: "n, v", ipa: "/treid/", vi: "thương mại, trao đổi hàng hóa" },
    { en: "tradition", type: "n", ipa: "/trə dıs.ən/", vi: "sự truyền thống, truyền thống" },
    { en: "traffic", type: "n", ipa: "/'træf.ik/", vi: "giao thông" },
    { en: "training", type: "n", ipa: "/'trei.nim/", vi: "sự huấn luyện, sự đào tạo" },
    { en: "transfer", type: "v", ipa: "/træns.fs:/", vi: "chuyển khoản, di chuyển" },
    { en: "transform", type: "v", ipa: "/træns form/", vi: "biến đổi, thay đổi hình dạng" },
    { en: "transformation", type: "n", ipa: "/træns.fə meı fən/", vi: "sự biến đổi" },
    { en: "transit", type: "n", ipa: "/'træn.zit/", vi: "sự vận chuyển, quá cảnh" },
    { en: "transportation", type: "n", ipa: "/træn.spə ter.fan/", vi: "sự vận chuyển, phương tiện giao thông" },
    { en: "trend", type: "n", ipa: "/trend/", vi: "xu hướng, mốt" },
    { en: "trial", type: "n", ipa: "/trarǝl/", vi: "sự thử nghiệm, phiên tòa xử" },
    { en: "triumph", type: "n", ipa: "/'traı.ǝmf/", vi: "chiến thắng vinh quang" },
    { en: "trust", type: "v, n", ipa: "/trast/", vi: "tin, tin tưởng" },
    { en: "turnover", type: "n", ipa: "/tsn.oo.va/", vi: "doanh số, doanh thu, tỉ lệ nghỉ việc" },
    { en: "unconditional", type: "adj", ipa: "/an.kən dıs.ən.ǝl/", vi: "vô điều kiện" },
    { en: "understand", type: "v", ipa: "/an.do'stænd/", vi: "hiểu, nắm bắt được" },
    { en: "unfavorable", type: "adj", ipa: "/an fervər.ə.bǝl/", vi: "không thuận lợi" },
    { en: "unfortunately", type: "adv", ipa: "/an fəxr.tfən.ǝt.li/", vi: "không may mắn, đáng tiếc" },
    { en: "uniform", type: "n", ipa: "/'ju.nə.form/", vi: "đồng phục" },
    { en: "unspoiled", type: "adj", ipa: "/an'spoild/", vi: "hoang sơ, nguyên vẹn" },
    { en: "unwrap", type: "v", ipa: "/лп гӕр/", vi: "bóc, mở gói" },
    { en: "upcoming", type: "adj", ipa: "/'Ap.kam.in/", vi: "sắp diễn ra" },
    { en: "update", type: "v", ipa: "/ap'deit/", vi: "cập nhật, nâng cấp" },
    { en: "upgrade", type: "v", ipa: "/ap'greid/", vi: "nâng cấp" },
    { en: "upset", type: "v, adj", ipa: "/ap'set/", vi: "buồn bã, lo lắng" },
    { en: "upstairs", type: "n, adv", ipa: "/ap'sterz/", vi: "ở tầng trên" },
    { en: "utility bill", type: "n", ipa: "/ju: til.ǝ.ti//bil/", vi: "hóa đơn điện nước" },
    { en: "vacancy", type: "n", ipa: "/ver.kən.si/", vi: "vị trí bỏ trống" },
    { en: "vacant", type: "adj", ipa: "/'ver.kənt/", vi: "bỏ trống, trống" },
    { en: "vacation", type: "n", ipa: "/ver'keı fən/", vi: "kì nghỉ" },
    { en: "vaccination", type: "n", ipa: "/væk.sə'neı fən/", vi: "tiêm chủng vắc xin" },
    { en: "valuables", type: "n", ipa: "/væl.jə.bəlz/", vi: "vật có giá trị" },
    { en: "varied", type: "adj", ipa: "/ver.id/", vi: "đa dạng" },
    { en: "variety", type: "n", ipa: "/və raı.ə.ti/", vi: "sự đa dạng" },
    { en: "various", type: "adj", ipa: "/ver.i.ǝs/", vi: "đa dạng, nhiều loại" },
    { en: "vendor", type: "n", ipa: "/ven.da/", vi: "người bán hàng, nhà cung cấp" },
    { en: "venture", type: "n", ipa: "/'ven.tfo/", vi: "dự án kinh doanh mạo hiểm, liên doanh" },
    { en: "venue", type: "n", ipa: "/'ven.ju:/", vi: "địa điểm tổ chức" },
    { en: "virus", type: "n", ipa: "/varǝs/", vi: "vi-rút" },
    { en: "vital", type: "adj", ipa: "/var.tǝl/", vi: "thiết yếu, trọng đại" },
    { en: "vivid", type: "adj", ipa: "/VIV.Id/", vi: "chói sáng, rực rỡ, sống động" },
    { en: "wage", type: "n", ipa: "/werdz/", vi: "tiền công, tiền lương (theo giờ/tuần)" },
    { en: "walkway", type: "n", ipa: "/wa:.kwei/", vi: "lối đi bộ" },
    { en: "warehouse", type: "n", ipa: "/'wer.haos/", vi: "kho hàng" },
    { en: "warn", type: "v", ipa: "/wo:rm/", vi: "cảnh báo" },
    { en: "warning", type: "n", ipa: "/'wɔ:r.nin/", vi: "sự cảnh báo" },
    { en: "warrant", type: "v, n", ipa: "/'wɔ:r.ǝnt/", vi: "bảo đảm, lệnh" },
    { en: "warranty", type: "n", ipa: "/'wɔ:r.ǝn.ti/", vi: "sự bảo hành, bảo đảm" },
    { en: "wastage", type: "n", ipa: "/'bi:f.kers/", vi: "sự lãng phí" },
    { en: "waterproof", type: "adj", ipa: "/'wa..to.pru:f/", vi: "chống nước" },
    { en: "wealth", type: "n", ipa: "/wel0/", vi: "sự giàu có, của cải" },
    { en: "website", type: "n", ipa: "/web.sart/", vi: "trang web" },
    { en: "weight", type: "n", ipa: "/weit/", vi: "cân nặng, trọng lượng" },
    { en: "welfare", type: "n", ipa: "/'wel.fer/", vi: "phúc lợi xã hội" },
    { en: "wholesale", type: "v, n, adv", ipa: "/'hool.seil/", vi: "bán sỉ, bán buôn" },
    { en: "win", type: "v", ipa: "/win/", vi: "thắng, chiến thắng" },
    { en: "withdraw", type: "v", ipa: "/wið dra:/", vi: "rút (tiền, quân...)" },
    { en: "withdrawal", type: "n", ipa: "/wið dra .ǝl/", vi: "sự rút ra (tiền)" },
    { en: "workplace", type: "n", ipa: "/w3.k.pleis/", vi: "nơi làm việc" },
    { en: "workshop", type: "n", ipa: "/w3k.fa:p/", vi: "hội thảo, xưởng sản xuất" },
    { en: "worth", type: "adj", ipa: "/w3:0/", vi: "đáng giá, giá trị" },
    { en: "worthless", type: "adj", ipa: "/'w3:0.las/", vi: "không có giá trị, vô giá trị" },
    { en: "wrap", type: "v", ipa: "/ræp/", vi: "gói, bọc lại" },
    { en: "write", type: "v", ipa: "/rait/", vi: "viết, sáng tác" },
    { en: "yearly", type: "adv, adj", ipa: "/'jır.li/", vi: "hằng năm" },
    { en: "yield", type: "v, n", ipa: "/ji:ld/", vi: "sản xuất, mang lại lợi nhuận" },
    { en: "youth", type: "n", ipa: "/ju:0/", vi: "tuổi trẻ, thời thanh xuân" },
    { en: "zero", type: "n", ipa: "/z1r.00/", vi: "số 0" },
    { en: "zone", type: "n", ipa: "/zoun/", vi: "vùng, khu vực" }
];

// Khởi tạo các mảng danh sách học tập
let flashcardList = [...wordList];
let favoriteWords = JSON.parse(localStorage.getItem('toeic_favorites')) || [];
let currentIndex = 0;
let currentStudyMode = "all"; // Chế độ: 'all' hoặc 'favorite'

// Các biến DOM chính
const card = document.getElementById('card');
const vocabEn = document.getElementById('vocab-en');
const vocabType = document.getElementById('vocab-type');
const vocabIpa = document.getElementById('vocab-ipa');
const vocabVi = document.getElementById('vocab-vi');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const speakBtn = document.getElementById('speak-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const studyModeSelect = document.getElementById('study-mode-select');
const darkModeToggle = document.getElementById('dark-mode-toggle');

const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');
const clearSearchBtn = document.getElementById('clear-search-btn');

const currentProgressNum = document.getElementById('current-progress-num');
const totalProgressNum = document.getElementById('total-progress-num');
const progressBarFill = document.getElementById('progress-bar-fill');

const startTestBtn = document.getElementById('start-test-btn');
const testContent = document.getElementById('test-content');
const testResult = document.getElementById('test-result');
const currentQuestionNum = document.getElementById('current-question-num');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextQuestionBtn = document.getElementById('next-question-btn');
const scoreCount = document.getElementById('score-count');
const restartTestBtn = document.getElementById('restart-test-btn');
const testHistoryList = document.getElementById('test-history-list');

let testQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Thuật toán trộn mảng
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ==========================================
// 2. TÍNH NĂNG ĐIỀU KHIỂN & CẬP NHẬT FLASHCARD
// ==========================================
function updateUI() {
    if (flashcardList.length === 0) {
        vocabEn.innerText = "Trống 🌟";
        vocabType.innerText = ""; vocabIpa.innerText = "";
        vocabVi.innerText = currentStudyMode === 'favorite' ? "Bạn chưa gắn sao từ khó nào hết." : "Không có dữ liệu.";
        currentProgressNum.innerText = 0; totalProgressNum.innerText = 0;
        progressBarFill.style.width = "0%"; favoriteBtn.innerText = "☆";
        return;
    }

    if (currentIndex >= flashcardList.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = flashcardList.length - 1;

    const currentWord = flashcardList[currentIndex];
    vocabEn.innerText = currentWord.en;
    vocabType.innerText = `(${currentWord.type})`;
    vocabIpa.innerText = currentWord.ipa;
    vocabVi.innerText = currentWord.vi;
    
    if (card) card.classList.remove('flipped');

    // Kiểm tra và hiển thị icon ngôi sao đã lưu hay chưa
    const isFav = favoriteWords.some(item => item.en === currentWord.en);
    favoriteBtn.innerText = isFav ? "⭐" : "☆";

    // Cập nhật thanh tiến độ
    currentProgressNum.innerText = currentIndex + 1;
    totalProgressNum.innerText = flashcardList.length;
    const percentage = ((currentIndex + 1) / flashcardList.length) * 100;
    progressBarFill.style.width = percentage + "%";

    // Lưu vị trí chỉ mục đang học
    localStorage.setItem(`toeic_index_${currentStudyMode}`, currentIndex);
}

// Bắt sự kiện chuyển chế độ học (Tất cả từ / Chỉ từ yêu thích)
if (studyModeSelect) {
    studyModeSelect.addEventListener('change', (e) => {
        currentStudyMode = e.target.value;
        if (currentStudyMode === "favorite") {
            flashcardList = [...favoriteWords];
        } else {
            flashcardList = [...wordList];
        }
        
        // Lấy lại chỉ mục cũ của chế độ đó nếu có lưu
        const savedIdx = localStorage.getItem(`toeic_index_${currentStudyMode}`);
        currentIndex = savedIdx !== null ? parseInt(savedIdx, 10) : 0;
        updateUI();
    });
}

// Bấm nút Ngôi sao lưu từ vựng yêu thích
if (favoriteBtn) {
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Không lật thẻ
        if (flashcardList.length === 0) return;
        
        const currentWord = flashcardList[currentIndex];
        const isFavIndex = favoriteWords.findIndex(item => item.en === currentWord.en);

        if (isFavIndex !== -1) {
            favoriteWords.splice(isFavIndex, 1); // Xóa khỏi danh sách nếu đã tồn tại
            favoriteBtn.innerText = "☆";
        } else {
            favoriteWords.push(currentWord); // Thêm mới vào mảng yêu thích
            favoriteBtn.innerText = "⭐";
        }

        localStorage.setItem('toeic_favorites', JSON.stringify(favoriteWords));

        // Nếu đang ở chế độ học từ yêu thích, cập nhật mảng chạy trực tiếp
        if (currentStudyMode === "favorite") {
            flashcardList = [...favoriteWords];
            updateUI();
        }
    });
}

if (card) card.addEventListener('click', () => card.classList.toggle('flipped'));
if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); currentIndex = (currentIndex + 1) % flashcardList.length; updateUI(); });
if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); currentIndex = (currentIndex - 1 + flashcardList.length) % flashcardList.length; updateUI(); });
if (shuffleBtn) shuffleBtn.addEventListener('click', () => { shuffle(flashcardList); currentIndex = 0; updateUI(); });

// ==========================================
// 3. LOGIC THANH TÌM KIẾM TRA CỨU BIẾN NỔI
// ==========================================
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase().trim();
        if (clearSearchBtn) clearSearchBtn.style.display = keyword ? 'block' : 'none';
        if (!keyword) { if (suggestionsList) suggestionsList.style.display = 'none'; return; }

        const filteredWords = wordList.filter(item => item.en.toLowerCase().includes(keyword)).slice(0, 5);

        if (suggestionsList) {
            if (filteredWords.length > 0) {
                suggestionsList.innerHTML = filteredWords.map(item => `<li data-en="${item.en}">${item.en} <small style="color:#7f8c8d">(${item.vi})</small></li>`).join('');
                suggestionsList.style.display = 'block';
            } else {
                suggestionsList.innerHTML = `<li>Không tìm thấy từ này...</li>`;
                suggestionsList.style.display = 'block';
            }
        }
    });
}

if (suggestionsList) {
    suggestionsList.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li) return;
        const clickedWordEn = li.getAttribute('data-en');
        if (clickedWordEn) {
            // Chuyển chế độ về 'all' để luôn tìm thấy từ
            currentStudyMode = "all";
            studyModeSelect.value = "all";
            flashcardList = [...wordList];
            
            const matchedIndex = flashcardList.findIndex(item => item.en === clickedWordEn);
            if (matchedIndex !== -1) {
                currentIndex = matchedIndex;
                updateUI();
            }
        }
        suggestionsList.style.display = 'none';
        searchInput.value = '';
        if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    });
}

if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = ''; searchInput.focus();
        clearSearchBtn.style.display = 'none';
        suggestionsList.style.display = 'none';
    });
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) { if (suggestionsList) suggestionsList.style.display = 'none'; }
});

// ==========================================
// 4. TÍNH NĂNG TEST 10 TỪ & GHI LỊCH SỬ ĐIỂM SỐ
// ==========================================
function generateTest() {
    let pool = [...wordList];
    shuffle(pool);
    testQuestions = pool.slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    
    startTestBtn.style.display = 'none';
    testResult.style.display = 'none';
    testContent.style.display = 'block';
    
    showQuestion();
}

function showQuestion() {
    nextQuestionBtn.style.display = 'none';
    optionsContainer.innerHTML = '';
    
    currentQuestionNum.innerText = currentQuestionIndex + 1;
    const currentQuestion = testQuestions[currentQuestionIndex];
    questionText.innerText = `Từ "${currentQuestion.en}" nghĩa là gì?`;
    
    let wrongOptionsPool = wordList.filter(item => item.en !== currentQuestion.en);
    shuffle(wrongOptionsPool);
    let options = [currentQuestion];
    
    for (let i = 0; i < 3; i++) {
        if (wrongOptionsPool[i]) options.push(wrongOptionsPool[i]);
    }
    shuffle(options);
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.vi;
        btn.addEventListener('click', () => checkAnswer(btn, opt.en, currentQuestion.en));
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedBtn, clickedEn, correctEn) {
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    if (clickedEn === correctEn) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        allButtons.forEach(btn => {
            if (btn.innerText === testQuestions[currentQuestionIndex].vi) {
                btn.classList.add('correct');
            }
        });
    }
    nextQuestionBtn.style.display = 'block';
}

if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < 10) {
            showQuestion();
        } else {
            testContent.style.display = 'none';
            testResult.style.display = 'block';
            scoreCount.innerText = score;
            
            // LƯU LỊCH SỬ LÀM BÀI TEST (Tối đa 5 lượt gần nhất)
            let history = JSON.parse(localStorage.getItem('toeic_test_history')) || [];
            const timeStr = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            history.unshift(`Đúng ${score}/10 câu (Lúc ${timeStr})`);
            if (history.length > 5) history.pop();
            localStorage.setItem('toeic_test_history', JSON.stringify(history));
            
            renderHistory();
        }
    });
}

function renderHistory() {
    let history = JSON.parse(localStorage.getItem('toeic_test_history')) || [];
    if (testHistoryList) {
        if (history.length === 0) {
            testHistoryList.innerHTML = "<li>Chưa có lượt test nào gần đây.</li>";
        } else {
            testHistoryList.innerHTML = history.map(item => `<li>${item}</li>`).join('');
        }
    }
}

if (startTestBtn) startTestBtn.addEventListener('click', generateTest);
if (restartTestBtn) restartTestBtn.addEventListener('click', generateTest);

// ==========================================
// 5. PHÁT ÂM AUDIO & ĐỔI CHẾ ĐỘ SÁNG TỐI
// ==========================================
if (speakBtn) {
    speakBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        const currentText = vocabEn.innerText;
        if (currentText && currentText !== "Loading..." && currentText !== "Trống 🌟") {
            const utterance = new SpeechSynthesisUtterance(currentText);
            utterance.lang = 'en-US'; 
            utterance.rate = 0.85; 
            window.speechSynthesis.speak(utterance);
        }
    });
}

if (darkModeToggle) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        darkModeToggle.innerText = savedTheme === 'dark' ? '☀️' : '🌙';
    }
    darkModeToggle.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        darkModeToggle.innerText = newTheme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', newTheme);
    });
}

// KHỞI CHẠY KHỞI TẠO BAN ĐẦU
const savedIndex = localStorage.getItem('toeic_index_all');
if (savedIndex !== null) {
    currentIndex = parseInt(savedIndex, 10);
} else {
    shuffle(flashcardList);
}
updateUI();
renderHistory();