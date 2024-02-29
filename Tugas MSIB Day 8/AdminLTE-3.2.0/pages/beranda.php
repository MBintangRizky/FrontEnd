<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Dashboard
    </h1>
    <ol class="breadcrumb">
      <li class="active text-primary">Admin</li>
    </ol>
  </section>
  <!-- Main content -->
  <section class="content">
    <div class="row">
      <!-- Quick Links Cards -->
      <div class="col-md-6 col-lg-4">
        <div class="info-box bg-info">
          <span class="info-box-icon"><i class="fa fa-users"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Total Customers</span>
            <?php
            include_once('./conf/db/koneksi.php');
            try {
              $query = "SELECT COUNT(*) AS total_customers FROM customer";
              $statement = $conn->prepare($query);
              $statement->execute();

              $result = $statement->fetch(PDO::FETCH_ASSOC);
              $totalCustomers = $result['total_customers'];

              echo '<span class="info-box-number">' . $totalCustomers . '</span>';
            } catch (PDOException $e) {
              echo "Query failed: " . $e->getMessage();
            } finally {
              $conn = null;
            }
            ?>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="info-box bg-success">
          <span class="info-box-icon"><i class="fa fa-chart-line"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Monthly Sales</span>
            <span class="info-box-number">$50,000</span>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="info-box bg-warning">
          <span class="info-box-icon"><i class="fa fa-calendar-alt"></i></span>
          <div class="info-box-content">
            <span class="info-box-text">Upcoming Events</span>
            <span class="info-box-number">3</span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="col-md-12">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">Informasi</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <p>Selamat datang di halaman dashboard! Silahkan pilih menu disamping untuk mengolah data customer.</p>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.Main Content -->
    </div>
    <!-- /.row -->
  </section>
  <!-- /.Main content -->
</div>
<!-- /.content-wrapper -->